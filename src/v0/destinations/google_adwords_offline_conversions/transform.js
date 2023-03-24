const sha256 = require('sha256');
const { get, set, cloneDeep } = require('lodash');
const moment = require('moment');
const { EventType } = require('../../../constants');
const {
  getHashFromArrayWithDuplicate,
  constructPayload,
  removeHyphens,
  simpleProcessRouterDest,
  getHashFromArray,
  getFieldValueFromMessage,
} = require('../../util');

const {
  CLICK_CONVERSION,
  CALL_CONVERSION,
  trackClickConversionsMapping,
  trackCallConversionsMapping,
  STORE_CONVERSION_CONFIG_RUN_JOB
} = require('./config');
const {
  validateDestinationConfig,
  removeHashToSha256TypeFromMappingJson,
  getOfflineUserDataJobId,
  addConversionToTheJob,
  requestBuilder,
  getClickConversionPayloadAndEndpoint
} = require('./utils');
const { InstrumentationError, ConfigurationError } = require('../../util/errorTypes');

/**
 * get conversions depending on the type set from dashboard
 * i.e click conversions or call conversions
 * @param {*} message
 * @param {*} metadata
 * @param {*} param2
 * @param {*} event
 * @param {*} conversionType
 * @returns
 */
const getConversions = async (message, metadata, { Config }, event, conversionType) => {
  let payload = {};
  let endpoint;
  let isStoreConversion = false
  const {
    validateOnly,
    customerId
  } = Config;
  const { properties, originalTimestamp } = message;

  const filteredCustomerId = removeHyphens(customerId);
  if (conversionType === 'click') {
    // click conversion
    const convertedPayload = getClickConversionPayloadAndEndpoint(message, Config, filteredCustomerId);
    payload = convertedPayload.payload;
    endpoint = convertedPayload.endpoint
  } else if (conversionType === 'store') {
    isStoreConversion = true;
    const offlineUserDataJobId = await getOfflineUserDataJobId(message, Config,
      metadata);
    await addConversionToTheJob(message, Config, offlineUserDataJobId, event, metadata);

    endpoint = STORE_CONVERSION_CONFIG_RUN_JOB.replace(
      'customerAndJobId',
      offlineUserDataJobId,
    ).replace(':customerId', filteredCustomerId);

    payload.validate_only = validateOnly;
  } else {
    // call conversions
    payload = constructPayload(message, trackCallConversionsMapping);
    endpoint = CALL_CONVERSION.replace(':customerId', filteredCustomerId);
  }

  if (conversionType !== 'store') {

    // transform originalTimestamp to conversionDateTime format (yyyy-mm-dd hh:mm:ss+|-hh:mm)
    // e.g 2019-10-14T11:15:18.299Z -> 2019-10-14 16:10:29+0530
    if (!properties.conversionDateTime && originalTimestamp) {
      const timestamp = originalTimestamp;
      const conversionDateTime = moment(timestamp)
        .utcOffset(moment(timestamp).utcOffset())
        .format('YYYY-MM-DD HH:mm:ssZ');
      set(payload, 'conversions[0].conversionDateTime', conversionDateTime);
    }
    payload.partialFailure = true;
  }
  const a = requestBuilder(payload, endpoint, Config, metadata, event, filteredCustomerId, properties, isStoreConversion);
  return a;
};

/**
 * response builder for track
 * @param {*} message
 * @param {*} metadata
 * @param {*} destination
 * @returns
 */
const trackResponseBuilder = async (message, metadata, destination) => {
  let { eventsToConversionsNamesMapping, eventsToOfflineConversionsTypeMapping } =
    destination.Config;
  let { event } = message;
  if (!event) {
    throw new InstrumentationError('Event name is not present');
  }

  event = event.toLowerCase().trim();

  eventsToConversionsNamesMapping = getHashFromArray(eventsToConversionsNamesMapping);

  eventsToOfflineConversionsTypeMapping = getHashFromArrayWithDuplicate(
    eventsToOfflineConversionsTypeMapping,
  );

  const responseList = [];
  if (!eventsToConversionsNamesMapping[event] || !eventsToOfflineConversionsTypeMapping[event]) {
    throw new ConfigurationError(`Event name '${event}' is not valid`);
  }
  const conversionTypes = Array.from(eventsToOfflineConversionsTypeMapping[event]);
  await Promise.all(
    conversionTypes.map(async (conversionType) => {
      responseList.push(
        await getConversions(
          message,
          metadata,
          destination,
          eventsToConversionsNamesMapping[event],
          conversionType,
        ),
      );
    }),
  );
  return responseList;
};

const process = async (event) => {
  const { message, metadata, destination } = event;

  if (!message.type) {
    throw new InstrumentationError('Message type is not present. Aborting message.');
  }

  validateDestinationConfig(destination);

  const messageType = message.type.toLowerCase();
  let response;
  if (messageType === EventType.TRACK) {
    response = await trackResponseBuilder(message, metadata, destination);
  } else {
    throw new InstrumentationError(`Message type ${messageType} not supported`);
  }

  return response;
};

const processRouterDest = async (inputs, reqMetadata) => {
  const respList = await simpleProcessRouterDest(inputs, process, reqMetadata);
  return respList;
};

module.exports = { process, processRouterDest };

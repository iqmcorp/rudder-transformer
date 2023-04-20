const { get } = require('lodash');
const { handleRtTfSingleEventError } = require('../../util');
const { EventType } = require('../../../constants');
const { getErrorRespEvents, constructPayload } = require('../../util');
const {
  processUserPayload,
  processCommonPayload,
  deduceEventName,
  postProcessEcomFields,
  checkUserPayloadValidity,
  processHashedUserPayload,
} = require('./utils');
const { responseBuilderSimple, batchEvents } = require('./pinterestTransformV3');
const { responseBuilderSimpleNew, batchEventsNew } = require('./pinterestTransformV5');

const { USER_CONFIGS, getV5EventsEndpoint, API_VERSION } = require('./config');
const { ConfigurationError, InstrumentationError } = require('../../util/errorTypes');

/**
 *
 * @param {*} message
 * @param {*} destination.Config
 * @param {*} messageType
 * @param {*} eventName
 * @returns the output of each input payload.
 * message deduplication logic looks like below:
 * This facility is provided *only* for the users who are using the *new configuration*.
 * if  "enableDeduplication" is set to *true* and "deduplicationKey" is set via webapp, that key value will be
 * sent as "event_id". On it's absence it will fallback to "messageId".
 * And if "enableDeduplication" is set to false, it will fallback to "messageId"
 */
const commonFieldResponseBuilder = (message, { Config }, messageType, eventName) => {
  let processedUserPayload;
  const { appId, advertiserId, deduplicationKey, sendingUnHashedData, sendExternalId, apiVersion } =
    Config;
  // ref: https://s.pinimg.com/ct/docs/conversions_api/dist/v3.html
  const processedCommonPayload = processCommonPayload(message);

  processedCommonPayload.event_id = get(message, `${deduplicationKey}`) || message.messageId;
  const userPayload = constructPayload(message, USER_CONFIGS, 'pinterest');

  if (!sendExternalId) {
    delete userPayload.external_id;
  }

  const isValidUserPayload = checkUserPayloadValidity(userPayload);
  if (isValidUserPayload === false) {
    throw new InstrumentationError(
      'It is required at least one of em, hashed_maids or pair of client_ip_address and client_user_agent',
    );
  }

  /**
   * User can configure hashed checkbox to false if they are sending already hashed data to Rudderstack
   * Otherwise we will hash data user data by default.
   */
  if (sendingUnHashedData) {
    processedUserPayload = processUserPayload(userPayload);
  } else {
    // when user is sending already hashed data to Rudderstack
    processedUserPayload = processHashedUserPayload(userPayload, message);
  }

  let response = {
    ...processedCommonPayload,
    event_name: eventName,
    app_id: appId,
    advertiser_id: advertiserId,
    user_data: processedUserPayload,
  };

  if (apiVersion === API_VERSION.v5) {
    delete response.advertiser_id;
  }

  if (messageType === EventType.TRACK) {
    response = postProcessEcomFields(message, response);
  }

  return response;
};

const process = (event) => {
  const toSendEvents = [];
  const respList = [];
  const deducedEventNameArray = [];
  const { message, destination } = event;
  const messageType = message.type?.toLowerCase();
  const {
    apiVersion = API_VERSION.v3,
    advertiserId,
    adAccountId,
    conversionToken,
  } = destination.Config;

  if (apiVersion === API_VERSION.v3 && !advertiserId) {
    throw new ConfigurationError('Advertiser Id not found. Aborting');
  }

  if (!message.type) {
    throw new InstrumentationError('Event type is required');
  }

  switch (messageType) {
    case EventType.PAGE:
    case EventType.SCREEN:
    case EventType.TRACK:
      deducedEventNameArray.push(...deduceEventName(message, destination.Config));
      deducedEventNameArray.forEach((eventName) => {
        toSendEvents.push(commonFieldResponseBuilder(message, destination, messageType, eventName));
      });

      break;
    default:
      throw new InstrumentationError(`message type ${messageType} is not supported`);
  }

  const endpoint = getV5EventsEndpoint(adAccountId);
  toSendEvents.forEach((sendEvent) => {
    if (apiVersion === API_VERSION.v5) {
      respList.push(responseBuilderSimpleNew(sendEvent, endpoint, conversionToken));
    } else {
      respList.push(responseBuilderSimple(sendEvent));
    }
  });
  return respList;
};

const processRouterDest = (inputs, reqMetadata) => {
  if (!Array.isArray(inputs) || inputs.length <= 0) {
    const respEvents = getErrorRespEvents(null, 400, 'Invalid event array');
    return [respEvents];
  }

  const successRespList = [];
  const batchErrorRespList = [];
  inputs.forEach((input) => {
    try {
      let resp = input.message;
      // transform if not already done
      if (!input.message.statusCode) {
        resp = process(input);
      }

      successRespList.push({
        message: Array.isArray(resp) ? resp : [resp],
        metadata: input.metadata,
        destination: input.destination,
      });
    } catch (error) {
      batchErrorRespList.push(handleRtTfSingleEventError(input, error, reqMetadata));
    }
  });

  // using the first destination config for transforming the batch
  const { destination } = inputs[0];
  const { apiVersion, adAccountId, conversionToken } = destination.Config;
  const endpoint = getV5EventsEndpoint(adAccountId);
  let batchResponseList = [];
  if (successRespList.length > 0) {
    if (apiVersion === API_VERSION.v5) {
      batchResponseList = batchEventsNew(successRespList, endpoint, conversionToken);
    } else {
      batchResponseList = batchEvents(successRespList);
    }
  }

  return [...batchResponseList, ...batchErrorRespList];
};

module.exports = { process, processRouterDest };

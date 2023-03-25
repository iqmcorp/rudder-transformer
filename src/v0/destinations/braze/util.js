/* eslint-disable camelcase */
const _ = require('lodash');
const get = require('get-value');
const { httpPOST } = require('../../../adapters/network');
const { processAxiosResponse } = require('../../../adapters/utils/networkUtils');
const {
  getDestinationExternalID,
  getFieldValueFromMessage,
  removeUndefinedAndNullValues,
  isDefinedAndNotNull,
} = require('../../util');
const { BRAZE_NON_BILLABLE_ATTRIBUTES, CustomAttributeOperationTypes } = require('./config');

const getEndpointFromConfig = (destination) => {
  // Init -- mostly for test cases
  let endpoint = 'https://rest.fra-01.braze.eu';

  // Ref: https://www.braze.com/docs/user_guide/administrative/access_braze/braze_instances
  if (destination.Config.dataCenter) {
    const dataCenterArr = destination.Config.dataCenter.trim().split('-');
    if (dataCenterArr[0].toLowerCase() === 'eu') {
      endpoint = `https://rest.fra-${dataCenterArr[1]}.braze.eu`;
    } else {
      endpoint = `https://rest.iad-${dataCenterArr[1]}.braze.com`;
    }
  }
  return endpoint;
};

const CustomAttributeOperationUtil = {
  customAttributeUpdateOperation(key, data, traits, mergeObjectsUpdateOperation) {
    data[key] = {};
    const opsResultArray = [];
    for (let i = 0; i < traits[key][CustomAttributeOperationTypes.UPDATE].length; i += 1) {
      const myObj = {};
      myObj.$identifier_key = traits[key][CustomAttributeOperationTypes.UPDATE][i].identifier;
      myObj.$identifier_value =
        traits[key][CustomAttributeOperationTypes.UPDATE][i][
          traits[key][CustomAttributeOperationTypes.UPDATE][i].identifier
        ];
      delete traits[key][CustomAttributeOperationTypes.UPDATE][i][
        traits[key][CustomAttributeOperationTypes.UPDATE][i].identifier
      ];
      delete traits[key][CustomAttributeOperationTypes.UPDATE][i].identifier;
      myObj.$new_object = {};
      Object.keys(traits[key][CustomAttributeOperationTypes.UPDATE][i]).forEach((subKey) => {
        myObj.$new_object[subKey] = traits[key][CustomAttributeOperationTypes.UPDATE][i][subKey];
      });
      opsResultArray.push(myObj);
    }
    // eslint-disable-next-line no-underscore-dangle
    data._merge_objects = isDefinedAndNotNull(mergeObjectsUpdateOperation)
      ? mergeObjectsUpdateOperation
      : false;
    data[key][`$${CustomAttributeOperationTypes.UPDATE}`] = opsResultArray;
  },

  customAttributeRemoveOperation(key, data, traits) {
    const opsResultArray = [];
    for (let i = 0; i < traits[key][CustomAttributeOperationTypes.REMOVE].length; i += 1) {
      const myObj = {};
      myObj.$identifier_key = traits[key][CustomAttributeOperationTypes.REMOVE][i].identifier;
      myObj.$identifier_value =
        traits[key][CustomAttributeOperationTypes.REMOVE][i][
          traits[key][CustomAttributeOperationTypes.REMOVE][i].identifier
        ];
      opsResultArray.push(myObj);
    }
    data[key][`$${CustomAttributeOperationTypes.REMOVE}`] = opsResultArray;
  },

  customAttributeAddOperation(key, data, traits) {
    data[key][`$${CustomAttributeOperationTypes.ADD}`] =
      traits[key][CustomAttributeOperationTypes.ADD];
  },
};

const BrazeDedupUtility = {
  prepareInputForDedup(inputs) {
    const externalIds = [];
    const aliasIds = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const input of inputs) {
      const { message } = input;
      const brazeExternalId = getDestinationExternalID(message, 'brazeExternalId');
      const userId = getFieldValueFromMessage(message, 'userIdOnly');
      const anonymousId = get(message, 'anonymousId');
      if (brazeExternalId) {
        externalIds.push(brazeExternalId);
      } else if (userId) {
        externalIds.push(userId);
      } else if (anonymousId) {
        aliasIds.push(anonymousId);
      }
    }
    const externalIdsToQuery = Array.from(new Set(externalIds));
    const aliasIdsToQuery = Array.from(new Set(aliasIds));
    return { externalIdsToQuery, aliasIdsToQuery };
  },

  prepareChunksForDedup(externalIdsToQuery, aliasIdsToQuery) {
    const identifiers = [];
    if (externalIdsToQuery.length > 0) {
      externalIdsToQuery.forEach((externalId) => {
        identifiers.push({
          external_id: externalId,
        });
      });
    }
    if (aliasIdsToQuery.length > 0) {
      aliasIdsToQuery.forEach((aliasId) => {
        identifiers.push({
          alias_name: aliasId,
          alias_label: 'rudder_id',
        });
      });
    }
    const identfierChunks = _.chunk(identifiers, 50);
    return identfierChunks;
  },

  async doApiLookup(identfierChunks, destination) {
    return Promise.all(
      identfierChunks.map(async (ids) => {
        const externalIdentifiers = ids.filter((id) => id.external_id !== undefined);
        const aliasIdentifiers = ids.filter((id) => id.alias_name !== undefined);

        const startTime = Date.now();
        const lookUpResponse = await httpPOST(
          `${getEndpointFromConfig(destination)}/users/export/ids`,
          {
            external_ids: externalIdentifiers.map((extId) => extId.external_id),
            user_aliases: aliasIdentifiers,
          },
          {
            headers: {
              Authorization: `Bearer ${destination.Config.restApiKey}`,
            },
            timeout: 10 * 1000,
          },
        );
        const endTime = Date.now();
        // TODO: Remove this log
        console.log(
          `Time taken to fetch user store: ${endTime - startTime} ms for ${ids.length} users`,
        );
        const processedLookUpResponse = processAxiosResponse(lookUpResponse);
        const { users } = processedLookUpResponse.response;

        return users;
      }),
    );
  },

  /**
   * Looks up multiple users in Braze and returns the user objects
   * uses the external_id field and the alias_name field to lookup users
   *
   * @param {*} inputs router transform input events array
   * @returns {Array} array of braze user objects
   */
  async doLookup(inputs) {
    const { destination } = inputs[0];
    const { externalIdsToQuery, aliasIdsToQuery } = this.prepareInputForDedup(inputs);
    const identfierChunks = this.prepareChunksForDedup(externalIdsToQuery, aliasIdsToQuery);
    const chunkedUserData = await this.doApiLookup(identfierChunks, destination);
    return _.flatMap(chunkedUserData);
  },

  /**
   * Updates the user store with the user objects
   *
   * @param {*} store
   * @param {*} users
   */
  updateUserStore(store, users) {
    if (isDefinedAndNotNull(users) && Array.isArray(users)) {
      users.forEach((user) => {
        if (user?.external_id) {
          store.set(user.external_id, user);
        } else if (user?.user_aliases) {
          user.user_aliases.forEach((alias) => {
            if (alias.alias_label === 'rudder_id') {
              store.set(alias.alias_name, user);
            }
          });
        }
      });
    }
  },

  /**
   * Returns the user object from the store
   * if the user object is not present in the store, it returns undefined
   *
   * @param {*} store
   * @param {*} identifier
   * @returns {Object | undefined} user object from the store
   */
  getUserDataFromStore(store, identifier) {
    return store.get(identifier);
  },

  /**
   * Deduplicates the user object with the user object from the store
   * returns original user object if the user object is not present in the store
   *
   * @param {*} userData
   * @param {*} store
   * @returns {Object} user object with deduplicated custom attributes
   */
  deduplicate(userData, store) {
    const excludeKeys = ['external_id', 'user_alias', 'appboy_id', 'braze_id', 'custom_events'];
    const { external_id, user_alias } = userData;
    const identfier = external_id || user_alias?.alias_name;
    let storedUserData = this.getUserDataFromStore(store, identfier);
    if (!storedUserData) {
      return userData;
    }
      const customAttributes = storedUserData?.custom_attributes;
      storedUserData = { ...storedUserData, ...customAttributes };
      delete storedUserData.custom_attributes;
      let deduplicatedUserData = {};
      const keys = Object.keys(userData)
        .filter((key) => !excludeKeys.includes(key))
        .filter((key) => !BRAZE_NON_BILLABLE_ATTRIBUTES.includes(key))
        .filter(
          (key) =>
            !(
              Object.keys(userData[key]).includes('$add') ||
              Object.keys(userData[key]).includes('$update') ||
              Object.keys(userData[key]).includes('$remove')
            ),
        );

      if (keys.length === 0) {
        return null;
      }

      keys.forEach((key) => {
        if (!_.isEqual(userData[key], storedUserData[key])) {
          deduplicatedUserData[key] = userData[key];
        }
      });

      if (Object.keys(deduplicatedUserData).length === 0) {
        return null;
      }
      deduplicatedUserData = {
        ...deduplicatedUserData,
        external_id,
        user_alias,
      };
      const identifier = external_id || user_alias.alias_name;
      store.set(identifier, { ...storedUserData, ...deduplicatedUserData });
      return removeUndefinedAndNullValues(deduplicatedUserData);
    
    
  },
};

module.exports = {
  getEndpointFromConfig,
  BrazeDedupUtility,
  CustomAttributeOperationUtil,
};

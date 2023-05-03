const _ = require('lodash');
const { handleHttpRequest } = require('../../../adapters/network');
const { BrazeDedupUtility } = require('./util');
const {
  removeUndefinedAndNullValues,
  removeUndefinedAndNullAndEmptyValues,
} = require('../../util');

// Mock the handleHttpRequest function
jest.mock('../../../adapters/network');

describe('dedup utility tests', () => {
  describe('prepareInputForDedup', () => {
    it('should return an object with empty arrays if no inputs are provided', () => {
      const input = [];
      const expectedOutput = {
        externalIdsToQuery: [],
        aliasIdsToQuery: [],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should extract the userIdIdOnly and add it to externalIdsToQuery array', () => {
      const input = [{ message: { userId: '762123' } }];
      const expectedOutput = {
        externalIdsToQuery: ['762123'],
        aliasIdsToQuery: [],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should extract the externalIdOnly and add it to externalIdsToQuery array', () => {
      const input = [
        { message: { context: { externalId: [{ type: 'brazeExternalId', id: '54321' }] } } },
      ];
      const expectedOutput = {
        externalIdsToQuery: ['54321'],
        aliasIdsToQuery: [],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should extract the anonymousId and add it to aliasIdsToQuery array', () => {
      const input = [{ message: { anonymousId: 'anon123' } }];
      const expectedOutput = {
        externalIdsToQuery: [],
        aliasIdsToQuery: ['anon123'],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should remove duplicates from externalIdsToQuery array', () => {
      const input = [
        { message: { userIdOnly: '123' } },
        { message: { context: { externalId: [{ type: 'brazeExternalId', id: '123' }] } } },
      ];
      const expectedOutput = {
        externalIdsToQuery: ['123'],
        aliasIdsToQuery: [],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should remove duplicates from aliasIdsToQuery array', () => {
      const input = [
        { message: { anonymousId: 'anon123' } },
        { message: { anonymousId: 'anon123' } },
        { message: { anonymousId: 'anon456' } },
      ];
      const expectedOutput = {
        externalIdsToQuery: [],
        aliasIdsToQuery: ['anon123', 'anon456'],
      };
      const actualOutput = BrazeDedupUtility.prepareInputForDedup(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('prepareChunksForDedup', () => {
    it('should return an empty array if both externalIdsToQuery and aliasIdsToQuery are empty', () => {
      const externalIdsToQuery = [];
      const aliasIdsToQuery = [];
      const expectedOutput = [];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an array of chunks with external_id identifiers if externalIdsToQuery is not empty', () => {
      const externalIdsToQuery = ['123', '456', '789'];
      const aliasIdsToQuery = [];
      const expectedOutput = [
        [{ external_id: '123' }, { external_id: '456' }, { external_id: '789' }],
      ];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an array of chunks with alias_name and alias_label identifiers if aliasIdsToQuery is not empty', () => {
      const externalIdsToQuery = [];
      const aliasIdsToQuery = ['abc', 'def', 'ghi'];
      const expectedOutput = [
        [
          { alias_name: 'abc', alias_label: 'rudder_id' },
          { alias_name: 'def', alias_label: 'rudder_id' },
          { alias_name: 'ghi', alias_label: 'rudder_id' },
        ],
      ];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an array of chunks with both external_id and alias_name/alias_label identifiers if both arrays are not empty', () => {
      const externalIdsToQuery = ['123', '456'];
      const aliasIdsToQuery = ['abc', 'def', 'ghi'];
      const expectedOutput = [
        [
          { external_id: '123' },
          { external_id: '456' },
          { alias_name: 'abc', alias_label: 'rudder_id' },
          { alias_name: 'def', alias_label: 'rudder_id' },
          { alias_name: 'ghi', alias_label: 'rudder_id' },
        ],
      ];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should chunk the identifiers array into arrays of size 50', () => {
      const externalIdsToQuery = new Array(100).fill('123');
      const aliasIdsToQuery = new Array(150).fill('abc');
      const expectedOutput = [
        new Array(50).fill({ external_id: '123' }),
        new Array(50).fill({ external_id: '123' }),
        new Array(50).fill({ alias_name: 'abc', alias_label: 'rudder_id' }),
        new Array(50).fill({ alias_name: 'abc', alias_label: 'rudder_id' }),
        new Array(50).fill({ alias_name: 'abc', alias_label: 'rudder_id' }),
      ];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('should return an array of chunks even if input arrays contain duplicates', () => {
      const externalIdsToQuery = ['123', '456', '789', '123', '456'];
      const aliasIdsToQuery = ['abc', 'def', 'ghi', 'abc', 'def'];
      const expectedOutput = [
        [
          { external_id: '123' },
          { external_id: '456' },
          { external_id: '789' },
          { external_id: '123' },
          { external_id: '456' },
          { alias_name: 'abc', alias_label: 'rudder_id' },
          { alias_name: 'def', alias_label: 'rudder_id' },
          { alias_name: 'ghi', alias_label: 'rudder_id' },
          { alias_name: 'abc', alias_label: 'rudder_id' },
          { alias_name: 'def', alias_label: 'rudder_id' },
        ],
      ];
      const actualOutput = BrazeDedupUtility.prepareChunksForDedup(
        externalIdsToQuery,
        aliasIdsToQuery,
      );
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('doApiLookup', () => {
    beforeEach(() => {
      // Clear all instances and calls to handleHttpRequest mock function
      handleHttpRequest.mockClear();
    });

    it('should return an array of users', async () => {
      // Mock the response from handleHttpRequest
      handleHttpRequest.mockResolvedValueOnce({
        processedResponse: {
          response: {
            users: [
              {
                external_id: 'user1',
                email: 'user1@example.com',
                custom_attributes: {
                  key1: 'value1',
                },
              },
              {
                external_id: 'user2',
                email: 'user2@example.com',
                custom_attributes: {
                  key2: 'value2',
                },
              },
              {
                user_aliases: [{ alias_name: 'user3', alias_label: 'rudder_id' }],
                email: 'user3@example.com',
                custom_attributes: {
                  key2: 'value3',
                },
              },
            ],
          },
        },
      });

      // Mock the input arguments
      const identfierChunks = [
        [
          {
            external_id: 'user1',
          },
          {
            external_id: 'user2',
          },
          {
            alias_name: 'user3',
            alias_label: 'rudder_id',
          },
        ],
      ];
      const destination = {
        ID: '2N9UakqKF0D35wfzSeofIxPdL8X',
        Name: 'Braze-Test',
        Config: {
          appKey: 'test-api-key',
          blacklistedEvents: [],
          dataCenter: 'US-03',
          enableNestedArrayOperations: false,
          enableSubscriptionGroupInGroupCall: false,
          eventFilteringOption: 'disable',
          oneTrustCookieCategories: [],
          restApiKey: 'test-rest-api-key',
          supportDedup: true,
          trackAnonymousUser: true,
          whitelistedEvents: [],
        },
        Enabled: true,
        WorkspaceID: 'workspaceidvalue',
        Transformations: [],
        IsProcessorEnabled: true,
      };

      // Call the function
      const users = await BrazeDedupUtility.doApiLookup(identfierChunks, destination);

      // Check the result
      expect(users).toEqual([
        [
          {
            external_id: 'user1',
            email: 'user1@example.com',
            custom_attributes: {
              key1: 'value1',
            },
          },
          {
            external_id: 'user2',
            email: 'user2@example.com',
            custom_attributes: {
              key2: 'value2',
            },
          },
          {
            user_aliases: [{ alias_name: 'user3', alias_label: 'rudder_id' }],
            email: 'user3@example.com',
            custom_attributes: {
              key2: 'value3',
            },
          },
        ],
      ]);

      // Check that handleHttpRequest was called once with the correct arguments
      expect(handleHttpRequest).toHaveBeenCalledTimes(1);
      expect(handleHttpRequest).toHaveBeenCalledWith(
        'post',
        'https://rest.iad-03.braze.com/users/export/ids',
        {
          external_ids: ['user1', 'user2'],
          user_aliases: [{ alias_name: 'user3', alias_label: 'rudder_id' }],
        },
        {
          headers: {
            Authorization: 'Bearer test-rest-api-key',
          },
          timeout: 10000,
        },
      );
    });

    it('should make multiple API calls for large input chunks', async () => {
      const destination = {
        ID: 'some-destination-id',
        Name: 'Test Destination',
        Config: {
          restApiKey: 'test-rest-api-key',
        },
      };

      // Code randomly generate true or false alsoa with timestamp component
      const randomBoolean = () => Math.random() >= 0.5;

      // Create an array of 110 identifiers
      const identifiers = Array.from({ length: 110 }, (_, i) =>
        randomBoolean()
          ? { external_id: `id-${i}` }
          : { alias_name: `id-${i}`, alias_label: 'rudder_id' },
      );

      // Chunk the identifiers into arrays of 50 each
      const identifierChunks = _.chunk(identifiers, 50);

      // Mock the handleHttpRequest function to return the same data every time it's called
      handleHttpRequest.mockImplementationOnce(() => ({
        processedResponse: {
          response: {
            users: Array.from({ length: 50 }, (_, i) =>
              removeUndefinedAndNullAndEmptyValues({
                external_id: identifiers[i].external_id,
                user_aliases: [
                  removeUndefinedAndNullValues({
                    alias_name: identifiers[i].alias_name,
                    alias_label: identifiers[i].alias_label,
                  }),
                ],
                first_name: `Test-${i}`,
                last_name: 'User',
              }),
            ),
          },
        },
      }));

      handleHttpRequest.mockImplementationOnce(() => ({
        processedResponse: {
          response: {
            users: Array.from({ length: 50 }, (_, i) =>
              removeUndefinedAndNullAndEmptyValues({
                external_id: identifiers[i + 50].external_id,
                user_aliases: [
                  removeUndefinedAndNullValues({
                    alias_name: identifiers[i + 50].alias_name,
                    alias_label: identifiers[i + 50].alias_label,
                  }),
                ],
                first_name: `Test-${i + 50}`,
                last_name: 'User',
              }),
            ),
          },
        },
      }));

      handleHttpRequest.mockImplementationOnce(() => ({
        processedResponse: {
          response: {
            users: Array.from({ length: 10 }, (_, i) =>
              removeUndefinedAndNullAndEmptyValues({
                external_id: identifiers[i + 100].external_id,
                user_aliases: [
                  removeUndefinedAndNullValues({
                    alias_name: identifiers[i + 100].alias_name,
                    alias_label: identifiers[i + 100].alias_label,
                  }),
                ],
                first_name: `Test-${i + 100}`,
                last_name: 'User',
              }),
            ),
          },
        },
      }));

      const chunkedUserData = await BrazeDedupUtility.doApiLookup(identifierChunks, destination);
      const result = _.flatMap(chunkedUserData);
      expect(result).toHaveLength(110);
      expect(handleHttpRequest).toHaveBeenCalledTimes(3);
    });

    it('should return users for successful API calls and return undefined for failed chunk', async () => {
      const destination = {
        ID: '123',
        Name: 'Test Destination',
        Config: {
          restApiKey: 'test_rest_api_key',
        },
      };
      const chunks = [
        [
          { external_id: 'user1' },
          { alias_name: 'alias1', alias_label: 'rudder_id' },
          { external_id: 'user2' },
        ],
        [{ alias_name: 'alias2', alias_label: 'rudder_id' }, { external_id: 'user3' }],
      ];

      // Success response for first chunk
      handleHttpRequest.mockImplementationOnce(() => ({
        processedResponse: {
          response: {
            users: [
              {
                external_id: 'user1',
                email: 'user1@example.com',
              },
              {
                alias_name: 'alias1',
                alias_label: 'rudder_id',
                email: 'alias1@example.com',
              },
              {
                external_id: 'user2',
                email: 'user2@example.com',
              },
            ],
          },
          status: 200,
        },
      }));
      // Failure response for second chunk
      handleHttpRequest.mockImplementationOnce(() => ({
        processedResponse: {
          response: {
            error: 'Failed to fetch users',
          },
          status: 500,
        },
      }));

      const users = await BrazeDedupUtility.doApiLookup(chunks, destination);

      expect(handleHttpRequest).toHaveBeenCalledTimes(2);
      // Assert that the first chunk was successful and the second failed
      // The failed chunked will be returned as undefined
      expect(users).toEqual([
        [
          { external_id: 'user1', email: 'user1@example.com' },
          { alias_name: 'alias1', alias_label: 'rudder_id', email: 'alias1@example.com' },
          { external_id: 'user2', email: 'user2@example.com' },
        ],
        undefined,
      ]);
    });
  });

  describe('doLookup', () => {
    test('returns combined user data from multiple api calls', async () => {
      // mock the functions used within doLookup
      const prepareInputForDedupMock = jest
        .spyOn(BrazeDedupUtility, 'prepareInputForDedup')
        .mockReturnValue({
          externalIdsToQuery: ['123', '456'],
          aliasIdsToQuery: ['alias1', 'alias2'],
        });
      const prepareChunksForDedupMock = jest
        .spyOn(BrazeDedupUtility, 'prepareChunksForDedup')
        .mockReturnValue([
          [{ external_id: '123' }],
          [{ external_id: '456' }],
          [{ alias_name: 'alias1', alias_label: 'rudder_id' }],
          [{ alias_name: 'alias2', alias_label: 'rudder_id' }],
        ]);
      const doApiLookupMock = jest.spyOn(BrazeDedupUtility, 'doApiLookup').mockResolvedValue([
        [{ external_id: '123', custom_attributes: { key1: 'value1' } }],
        [{ external_id: '456', custom_attributes: { key2: 'value2' } }],
        undefined, // simulate failed api call
        [{ alias_name: 'alias2', custom_attributes: { key3: 'value3' } }],
      ]);

      // create input data for doLookup
      const inputs = [
        { destination: { Config: { restApiKey: 'xyz' } }, message: { user_id: '123' } },
        { destination: { Config: { restApiKey: 'xyz' } }, message: { user_id: '456' } },
        { destination: { Config: { restApiKey: 'xyz' } }, message: { anonymousId: 'alias1' } },
        { destination: { Config: { restApiKey: 'xyz' } }, message: { anonymousId: 'alias2' } },
      ];

      // call doLookup and verify the output
      const result = await BrazeDedupUtility.doLookup(inputs);
      expect(result).toEqual([
        { external_id: '123', custom_attributes: { key1: 'value1' } },
        { external_id: '456', custom_attributes: { key2: 'value2' } },
        undefined, // response of failed api call
        { alias_name: 'alias2', custom_attributes: { key3: 'value3' } },
      ]);

      // verify that the mocked functions were called with correct arguments
      expect(prepareInputForDedupMock).toHaveBeenCalledWith(inputs);
      expect(prepareChunksForDedupMock).toHaveBeenCalledWith(['123', '456'], ['alias1', 'alias2']);
      expect(doApiLookupMock).toHaveBeenCalledWith(
        [
          [{ external_id: '123' }],
          [{ external_id: '456' }],
          [{ alias_name: 'alias1', alias_label: 'rudder_id' }],
          [{ alias_name: 'alias2', alias_label: 'rudder_id' }],
        ],
        { Config: { restApiKey: 'xyz' } },
      );

      // restore the original implementation of the mocked functions
      prepareInputForDedupMock.mockRestore();
      prepareChunksForDedupMock.mockRestore();
      doApiLookupMock.mockRestore();
    });
  });

  describe('store update and retrievals', () => {
    test('updateUserStore adds users to the store correctly', () => {
      const store = new Map();
      const users = [
        {
          external_id: '123',
          name: 'John Doe',
        },
        {
          user_aliases: [
            {
              alias_label: 'rudder_id',
              alias_name: '456',
            },
          ],
          name: 'Jane Doe',
        },
      ];

      BrazeDedupUtility.updateUserStore(store, users);

      expect(store.get('123')).toEqual({
        external_id: '123',
        name: 'John Doe',
      });
      expect(store.get('456')).toEqual({
        user_aliases: [
          {
            alias_label: 'rudder_id',
            alias_name: '456',
          },
        ],
        name: 'Jane Doe',
      });
    });

    test('getUserDataFromStore returns user data from store for valid identifier', () => {
      const store = new Map();
      const user1 = {
        external_id: 'user-123',
        name: 'John Doe',
      };
      const user2 = {
        user_aliases: [
          {
            alias_name: 'user-456',
            alias_label: 'rudder_id',
          },
        ],
        name: 'Jane Doe',
      };
      store.set(user1.external_id, user1);
      store.set(user2.user_aliases[0].alias_name, user2);

      const result1 = BrazeDedupUtility.getUserDataFromStore(store, 'user-123');
      const result2 = BrazeDedupUtility.getUserDataFromStore(store, 'user-456');

      expect(result1).toEqual(user1);
      expect(result2).toEqual(user2);
    });

    test('getUserDataFromStore returns undefined for invalid identifier', () => {
      const store = new Map();
      const user1 = {
        external_id: 'user-123',
        name: 'John Doe',
      };
      const user2 = {
        user_aliases: [
          {
            alias_name: 'user-456',
            alias_label: 'rudder_id',
          },
        ],
        name: 'Jane Doe',
      };
      store.set(user1.external_id, user1);
      store.set(user2.user_aliases[0].alias_name, user2);

      const result = BrazeDedupUtility.getUserDataFromStore(store, 'user-789');

      expect(result).toBeUndefined();
    });
  });

  describe('deduplicate', () => {
    let store;

    beforeEach(() => {
      store = new Map();
    });

    test('returns {} if userData is empty', () => {
      const userData = {};
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(result).toEqual({});
    });

    test('returns null if keys in userData and store are equal', () => {
      const userData = {
        external_id: '123',
        color: 'blue',
        age: 25,
      };
      const storeData = {
        external_id: '123',
        custom_attributes: {
          color: 'blue',
          age: 25,
        },
      };
      store.set('123', storeData);
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(result).toBeNull();
    });

    test('returns userData if it is not present in store', () => {
      const userData = {
        external_id: '123',
        custom_attributes: {
          color: 'blue',
          age: 25,
        },
      };
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(store.size).toBe(1);
      expect(result).toEqual(userData);
    });

    test('deduplicates user data correctly', () => {
      const userData = {
        external_id: '123',
        color: 'green',
        age: 30,
        gender: 'male',
      };
      const storeData = {
        external_id: '123',
        custom_attributes: {
          color: 'blue',
          age: 25,
        },
      };
      store.set('123', storeData);
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(store.size).toBe(1);
      expect(result).toEqual({
        external_id: '123',
        color: 'green',
        age: 30,
        gender: 'male',
      });
    });

    test('returns null if all keys are in BRAZE_NON_BILLABLE_ATTRIBUTES', () => {
      const userData = {
        external_id: '123',
        country: 'US',
        language: 'en',
        color: 'blue',
        age: 25,
      };

      const storeData = {
        external_id: '123',
        custom_attributes: {
          color: 'blue',
          age: 25,
        },
      };
      store.set('123', storeData);
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(result).toBeNull();
    });

    test('returns null if all keys have $add, $update, or $remove properties', () => {
      const userData = {
        external_id: '123',
        color: {
          $add: 'blue',
          $update: 'red',
          $remove: 'green',
        },
        age: 25,
        ethnicity: 'asian',
      };

      const storeData = {
        external_id: '123',
        custom_attributes: {
          age: 25,
          ethnicity: 'asian',
        },
      };
      store.set('123', storeData);
      const result = BrazeDedupUtility.deduplicate(userData, store);
      expect(result).toBeNull();
    });
  });
});

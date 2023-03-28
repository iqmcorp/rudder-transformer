const data = [
  {
    name: 'ometria',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                type: 'identify',
                sentAt: '2021-10-25T09:40:08.880Z',
                userId: 'userId1',
                channel: 'web',
                context: {
                  os: {
                    name: '',
                    version: '',
                  },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.2.1',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  page: {
                    url: 'http://127.0.0.1:5500/index.html',
                    path: '/index.html',
                    title: 'Test',
                    search: '',
                    tab_url: 'http://127.0.0.1:5500/index.html',
                    referrer: 'http://127.0.0.1:5500/index.html',
                    initial_referrer: 'http://127.0.0.1:5500/index.html',
                    referring_domain: '127.0.0.1:5500',
                    initial_referring_domain: '127.0.0.1:5500',
                  },
                  locale: 'en-GB',
                  screen: {
                    width: 1440,
                    height: 900,
                    density: 2,
                    innerWidth: 1440,
                    innerHeight: 335,
                  },
                  traits: {
                    listingId: 'test1',
                    email: 'testone@gmail.com',
                    firstName: 'test',
                    lastName: 'one',
                    field1: 'val1',
                    ip: '0.0.0.0',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.2.1',
                  },
                  campaign: {},
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
                },
                rudderId: 'e3e907f1-f79a-444b-b91d-da47488f8273',
                messageId: '8cdd3d2e-5e07-42ec-abdc-9b6bd4333840',
                timestamp: '2021-10-25T15:10:08.888+05:30',
                receivedAt: '2021-10-25T15:10:08.889+05:30',
                request_ip: '[::1]',
                anonymousId: '7138f7d9-5dd2-4337-805d-ca17be59dc8e',
                integrations: {
                  Ometria: {
                    listingId: 'test1',
                  },
                },
                originalTimestamp: '2021-10-25T09:40:08.879Z',
              },
              metadata: { jobId: 1 },
              destination: {
                ID: '1zzHtStW2ZPlullmz6L7DGnmk9V',
                Name: 'ometria-dev',
                DestinationDefinition: {
                  ID: '1zgVZhcj1Tij4qlKg7B1Jp16IrH',
                  Name: 'OMETRIA',
                  DisplayName: 'Ometria',
                  Config: {
                    transformAt: 'router',
                    transformAtV1: 'router',
                    saveDestinationResponse: true,
                    includeKeys: [],
                    excludeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                      'cordova',
                    ],
                    supportedMessageTypes: ['identify', 'track'],
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'marketingOptin',
                        'allowMarketing',
                        'allowTransactional',
                      ],
                    },
                    secretKeys: ['apiKey'],
                  },
                  ResponseRules: {},
                },
                Config: {
                  apiKey: '4f9880adb424c5065df868a339b1c0e0',
                  allowMarketing: false,
                  allowTransactional: false,
                  marketingOptin: 'EXPLICITLY_OPTEDOUT',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              message: {
                type: 'identify',
                sentAt: '2021-10-25T09:40:08.880Z',
                anonymousId: '123456',
                userId: 'userId1',
                channel: 'web',
                context: {
                  os: {
                    name: '',
                    version: '',
                  },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.2.1',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  page: {
                    url: 'http://127.0.0.1:5500/index.html',
                    path: '/index.html',
                    title: 'Test',
                    search: '',
                    tab_url: 'http://127.0.0.1:5500/index.html',
                    referrer: 'http://127.0.0.1:5500/index.html',
                    initial_referrer: 'http://127.0.0.1:5500/index.html',
                    referring_domain: '127.0.0.1:5500',
                    initial_referring_domain: '127.0.0.1:5500',
                  },
                  locale: 'en-GB',
                  screen: {
                    width: 1440,
                    height: 900,
                    density: 2,
                    innerWidth: 1440,
                    innerHeight: 335,
                  },
                  traits: {
                    listingId: 'test1',
                    email: 'testone@gmail.com',
                    firstName: 'test',
                    lastName: 'one',
                    field1: 'val1',
                    ip: '0.0.0.0',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.2.1',
                  },
                  campaign: {},
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
                },
                rudderId: 'e3e907f1-f79a-444b-b91d-da47488f8273',
                messageId: '8cdd3d2e-5e07-42ec-abdc-9b6bd4333840',
                timestamp: '2021-10-25T15:10:08.888+05:30',
                receivedAt: '2021-10-25T15:10:08.889+05:30',
                request_ip: '[::1]',
                integrations: {
                  Ometria: {
                    listingId: 'updatedId1',
                    allowMarketing: true,
                  },
                },
                originalTimestamp: '2021-10-25T09:40:08.879Z',
              },
              metadata: { jobId: 2 },
              destination: {
                ID: '1zzHtStW2ZPlullmz6L7DGnmk9V',
                Name: 'ometria-dev',
                DestinationDefinition: {
                  ID: '1zgVZhcj1Tij4qlKg7B1Jp16IrH',
                  Name: 'OMETRIA',
                  DisplayName: 'Ometria',
                  Config: {
                    transformAt: 'router',
                    transformAtV1: 'router',
                    saveDestinationResponse: true,
                    includeKeys: [],
                    excludeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                      'cordova',
                    ],
                    supportedMessageTypes: ['identify', 'track'],
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'marketingOptin',
                        'allowMarketing',
                        'allowTransactional',
                      ],
                    },
                    secretKeys: ['apiKey'],
                  },
                  ResponseRules: {},
                },
                Config: {
                  apiKey: '4f9880adb424c5065df868a339b1c0e0',
                  allowMarketing: false,
                  allowTransactional: false,
                  marketingOptin: 'EXPLICITLY_OPTEDOUT',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'ometria',
        },
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://api.ometria.com/v2/push',
                headers: {
                  'X-Ometria-Auth': '4f9880adb424c5065df868a339b1c0e0',
                },
                params: {},
                body: {
                  JSON: {},
                  JSON_ARRAY: {
                    batch:
                      '[{"email":"testone@gmail.com","id":"test1","customer_id":"userId1","firstname":"test","lastname":"one","@type":"contact","properties":{"field1":"val1","ip":"0.0.0.0"},"marketing_optin":"EXPLICITLY_OPTEDOUT","channels":{"sms":{"allow_marketing":false,"allow_transactional":false}}},{"email":"testone@gmail.com","id":"updatedId1","customer_id":"userId1","firstname":"test","lastname":"one","@type":"contact","properties":{"field1":"val1","ip":"0.0.0.0"},"marketing_optin":"EXPLICITLY_OPTEDOUT","channels":{"sms":{"allow_marketing":true,"allow_transactional":false}}}]',
                  },
                  XML: {},
                  FORM: {},
                },
                files: {},
                userId: '',
              },
              metadata: [
                {
                  jobId: 1,
                },
                {
                  jobId: 2,
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zzHtStW2ZPlullmz6L7DGnmk9V',
                Name: 'ometria-dev',
                DestinationDefinition: {
                  ID: '1zgVZhcj1Tij4qlKg7B1Jp16IrH',
                  Name: 'OMETRIA',
                  DisplayName: 'Ometria',
                  Config: {
                    transformAt: 'router',
                    transformAtV1: 'router',
                    saveDestinationResponse: true,
                    includeKeys: [],
                    excludeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                      'cordova',
                    ],
                    supportedMessageTypes: ['identify', 'track'],
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'marketingOptin',
                        'allowMarketing',
                        'allowTransactional',
                      ],
                    },
                    secretKeys: ['apiKey'],
                  },
                  ResponseRules: {},
                },
                Config: {
                  apiKey: '4f9880adb424c5065df868a339b1c0e0',
                  allowMarketing: false,
                  allowTransactional: false,
                  marketingOptin: 'EXPLICITLY_OPTEDOUT',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
        },
      },
    },
  },
];

module.exports = {
  data,
};

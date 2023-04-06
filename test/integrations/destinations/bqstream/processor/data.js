const data = [
  {
    name: 'bqstream',
    description: 'Test 0',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                rudderAccountId: '1z8LpaSAuFR9TPWL6fECZfjmRa-',
                projectId: 'gc-project-id',
                datasetId: 'gc_dataset',
                tableId: 'gc_table',
                authStatus: 'active',
                eventDelivery: true,
                eventDeliveryTS: 1636965406397,
              },
              DestinationDefinition: {
                Name: 'BQSTREAM',
                ID: '1xo8AlGqhz79yY4IzE01qJAcb0R',
                DisplayName: 'BigQuery Stream',
                Config: {
                  destConfig: {
                    defaultConfig: [
                      'rudderAccountId',
                      'datasetId',
                      'tableId',
                      'projectId',
                      'insertId',
                    ],
                  },
                  secretKeys: [],
                  excludeKeys: [],
                  includeKeys: [],
                  transformAt: 'router',
                  transformAtV1: 'router',
                  supportedSourceTypes: [
                    'android',
                    'ios',
                    'web',
                    'unity',
                    'amp',
                    'cloud',
                    'reactnative',
                    'cloudSource',
                    'flutter',
                    'cordova',
                  ],
                  saveDestinationResponse: true,
                },
              },
              Enabled: true,
              ID: '1WXjIHpu7ETXgjfiGPW3kCUgZFR',
              Name: 'bqstream test',
              Transformations: [],
            },
            metadata: {},
            message: {
              type: 'track',
              event: 'insert product',
              sentAt: '2021-09-08T11:10:45.466Z',
              userId: 'user12345',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.18',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:5500/index.html',
                  path: '/index.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:5500/index.html',
                  referrer: '$direct',
                  initial_referrer: '$direct',
                  referring_domain: '',
                  initial_referring_domain: '',
                },
                locale: 'en-GB',
                screen: {
                  width: 1536,
                  height: 960,
                  density: 2,
                  innerWidth: 1536,
                  innerHeight: 776,
                },
                traits: {},
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.18',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
              },
              rudderId: 'fa2994a5-2a81-45fd-9919-fcf5596ad380',
              messageId: 'e2d1a383-d9a2-4e03-a9dc-131d153c4d95',
              timestamp: '2021-11-15T14:06:42.497+05:30',
              properties: {
                count: 25,
                productId: 6,
                productName: 'Product-5',
              },
              receivedAt: '2021-11-15T14:06:42.497+05:30',
              request_ip: '[::1]',
              anonymousId: 'd8b2ed61-7fa5-4ef8-bd92-6a506157c0cf',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-09-08T11:10:45.466Z',
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            metadata: {},
            output: {
              datasetId: 'gc_dataset',
              projectId: 'gc-project-id',
              properties: { count: 25, productId: 6, productName: 'Product-5' },
              tableId: 'gc_table',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'bqstream',
    description: 'Test 1',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                rudderAccountId: '1z8LpaSAuFR9TPWL6fECZfjmRa-',
                projectId: 'gc-project-id',
                datasetId: 'gc_dataset',
                tableId: 'gc_table',
                insertId: 'productId',
                eventDelivery: true,
                eventDeliveryTS: 1636965406397,
              },
              DestinationDefinition: {
                Name: 'BQSTREAM',
                ID: '1xo8AlGqhz79yY4IzE01qJAcb0R',
                DisplayName: 'BigQuery Stream',
                Config: {
                  destConfig: {
                    defaultConfig: [
                      'rudderAccountId',
                      'datasetId',
                      'tableId',
                      'projectId',
                      'insertId',
                    ],
                  },
                  secretKeys: [],
                  excludeKeys: [],
                  includeKeys: [],
                  transformAt: 'router',
                  transformAtV1: 'router',
                  supportedSourceTypes: [
                    'android',
                    'ios',
                    'web',
                    'unity',
                    'amp',
                    'cloud',
                    'reactnative',
                    'cloudSource',
                    'flutter',
                    'cordova',
                  ],
                  saveDestinationResponse: true,
                },
              },
              Enabled: true,
              ID: '1WXjIHpu7ETXgjfiGPW3kCUgZFR',
              Name: 'bqstream test',
              Transformations: [],
            },
            metadata: {},
            message: {
              type: 'track',
              event: 'insert product',
              sentAt: '2021-09-08T11:10:45.466Z',
              userId: 'user12345',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.18',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:5500/index.html',
                  path: '/index.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:5500/index.html',
                  referrer: '$direct',
                  initial_referrer: '$direct',
                  referring_domain: '',
                  initial_referring_domain: '',
                },
                locale: 'en-GB',
                screen: {
                  width: 1536,
                  height: 960,
                  density: 2,
                  innerWidth: 1536,
                  innerHeight: 776,
                },
                traits: {},
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.18',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
              },
              rudderId: 'fa2994a5-2a81-45fd-9919-fcf5596ad380',
              messageId: 'e2d1a383-d9a2-4e03-a9dc-131d153c4d95',
              timestamp: '2021-11-15T14:06:42.497+05:30',
              properties: {
                count: 25,
                productId: 6,
                productName: 'Product-5',
              },
              receivedAt: '2021-11-15T14:06:42.497+05:30',
              request_ip: '[::1]',
              anonymousId: 'd8b2ed61-7fa5-4ef8-bd92-6a506157c0cf',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-09-08T11:10:45.466Z',
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            metadata: {},
            output: {
              datasetId: 'gc_dataset',
              projectId: 'gc-project-id',
              properties: {
                count: 25,
                productId: 6,
                productName: 'Product-5',
                insertId: '6',
              },
              tableId: 'gc_table',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
];

module.exports = {
  data,
};

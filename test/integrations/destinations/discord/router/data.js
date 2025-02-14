const data = [
  {
    name: 'dicord',
    description: 'Discord batch events',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventChannelSettings: [],
                  eventTemplateSettings: [],
                  IdentifyTemplate: 'identified {{name}} with {{traits}}',
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                anonymousId: '4de817fb-7f8e-4e23-b9be-f6736dbda20f',
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.1-rc.1',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.1.1-rc.1',
                  },
                  locale: 'en-US',
                  os: {
                    name: '',
                    version: '',
                  },
                  page: {
                    path: '/tests/html/script-test.html',
                    referrer: 'http://localhost:1111/tests/html/',
                    search: '',
                    title: '',
                    url: 'http://localhost:1111/tests/html/script-test.html',
                  },
                  screen: {
                    density: 1.7999999523162842,
                  },
                  traits: {
                    country: 'India',
                    email: 'name@domain.com',
                    hiji: 'hulala',
                    name: 'my-name',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
                },
                integrations: {
                  All: true,
                },
                messageId: '9ecc0183-89ed-48bd-87eb-b2d8e1ca6780',
                originalTimestamp: '2020-03-23T03:46:30.916Z',
                properties: {
                  path: '/tests/html/script-test.html',
                  referrer: 'http://localhost:1111/tests/html/',
                  search: '',
                  title: '',
                  url: 'http://localhost:1111/tests/html/script-test.html',
                },
                receivedAt: '2020-03-23T09:16:31.041+05:30',
                request_ip: '[::1]:52056',
                sentAt: '2020-03-23T03:46:30.916Z',
                timestamp: '2020-03-23T09:16:31.041+05:30',
                type: 'page',
                userId: '12345',
              },
              metadata: {
                jobId: 1,
              },
            },
            {
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventChannelSettings: [],
                  eventTemplateSettings: [],
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [
                    {
                      trait: 'country',
                    },
                    {
                      trait: 'email',
                    },
                    {
                      trait: 'name',
                    },
                  ],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                anonymousId: '12345',
                channel: 'web',
                context: {
                  screen: {
                    density: 1.7999999523162842,
                  },
                  traits: {
                    country: 'India',
                    email: 'name@domain.com',
                    hiji: 'hulala',
                    name: 'my-name',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
                },
                traits: {
                  country: 'USA',
                  email: 'test@domain.com',
                  hiji: 'hulala-1',
                  name: 'my-name-1',
                },
                integrations: {
                  All: true,
                },
                messageId: '4aaecff2-a513-4bbf-9824-c471f4ac9777',
                originalTimestamp: '2020-03-23T03:41:46.122Z',
                receivedAt: '2020-03-23T09:11:46.244+05:30',
                request_ip: '[::1]:52055',
                sentAt: '2020-03-23T03:41:46.123Z',
                timestamp: '2020-03-23T09:11:46.243+05:30',
                type: 'Identify',
                userId: '12345',
              },
              metadata: {
                anonymousId: '12345',
                destinationId: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                destinationType: 'DISCORD',
                jobId: 123,
                messageId: '4aaecff2-a513-4bbf-9824-c471f4ac9777',
                sourceId: '1YhwKyDcKstudlGxkeN5p2wgsrp',
              },
            },
            {
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventTemplateSettings: [
                    {
                      eventName: 'is',
                      eventRegex: true,
                      eventTemplate:
                        '{{name}} performed {{event}} with {{properties.key1}} {{properties.key2}}',
                    },
                    {
                      eventName: 'test',
                      eventRegex: true,
                      eventTemplate: '{{event}} is performed by {{name}} with {{properties}}',
                    },
                  ],
                  IdentifyTemplate: 'identified {{name}} with {{traits}}',
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [
                    {
                      trait: 'hiji',
                    },
                    {
                      trait: '',
                    },
                  ],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                anonymousId: '00000000000000000000000000',
                channel: 'web',
                context: {
                  traits: {
                    country: 'India',
                    email: 'name@domain.com',
                    hiji: 'hulala',
                    name: 'my-name',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
                },
                event: 'test_eventing_testis',
                integrations: {
                  All: true,
                },
                messageId: '8b8d5937-09bc-49dc-a35e-8cd6370575f8',
                originalTimestamp: '2020-03-23T03:46:30.922Z',
                properties: {
                  currency: 'USD',
                  key1: 'test_val1',
                  key2: 'test_val2',
                  revenue: 30,
                  user_actual_id: 12345,
                },
                receivedAt: '2020-03-23T09:16:31.064+05:30',
                request_ip: '[::1]:52054',
                sentAt: '2020-03-23T03:46:30.923Z',
                timestamp: '2020-03-23T09:16:31.063+05:30',
                type: 'track',
                userId: '12345',
              },
              metadata: {
                anonymousId: '00000000000000000000000000',
                destinationId: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                destinationType: 'DISCORD',
                jobId: 129,
                messageId: '8b8d5937-09bc-49dc-a35e-8cd6370575f8',
                sourceId: '1YhwKyDcKstudlGxkeN5p2wgsrp',
              },
            },
          ],
          destType: 'discord',
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
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventChannelSettings: [],
                  eventTemplateSettings: [],
                  IdentifyTemplate: 'identified {{name}} with {{traits}}',
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              metadata: [
                {
                  jobId: 1,
                },
              ],
              statTags: {
                destType: 'DISCORD',
                feature: 'router',
                implementation: 'native',
                errorCategory: 'dataValidation',
                module: 'destination',
                errorType: 'instrumentation',
              },
              batched: false,
              statusCode: 400,
              error: 'Event type page is not supported',
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://abcd.com/efgh/89078/979868/98678',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    content:
                      'Identified my-name-1 with country: USA email: test@domain.com name: my-name-1 ',
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: '',
              },
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventChannelSettings: [],
                  eventTemplateSettings: [],
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [
                    {
                      trait: 'country',
                    },
                    {
                      trait: 'email',
                    },
                    {
                      trait: 'name',
                    },
                  ],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              metadata: [
                {
                  anonymousId: '12345',
                  destinationId: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                  destinationType: 'DISCORD',
                  jobId: 123,
                  messageId: '4aaecff2-a513-4bbf-9824-c471f4ac9777',
                  sourceId: '1YhwKyDcKstudlGxkeN5p2wgsrp',
                },
              ],
              batched: false,
              statusCode: 200,
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://abcd.com/efgh/89078/979868/98678',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    content: 'my-name performed test_eventing_testis with test_val1 test_val2',
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: '',
              },
              destination: {
                ID: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                Name: 'test-Discord',
                DestinationDefinition: {
                  ID: '1ZQUiJVMlmF7lfsdfXg7KXQnlLV',
                  Name: 'DISCORD',
                  DisplayName: 'Discord',
                  Config: {
                    excludeKeys: [],
                    includeKeys: [],
                  },
                },
                Config: {
                  eventTemplateSettings: [
                    {
                      eventName: 'is',
                      eventRegex: true,
                      eventTemplate:
                        '{{name}} performed {{event}} with {{properties.key1}} {{properties.key2}}',
                    },
                    {
                      eventName: 'test',
                      eventRegex: true,
                      eventTemplate: '{{event}} is performed by {{name}} with {{properties}}',
                    },
                  ],
                  IdentifyTemplate: 'identified {{name}} with {{traits}}',
                  webhookUrl: 'https://abcd.com/efgh/89078/979868/98678',
                  whitelistedTraitsSettings: [
                    {
                      trait: 'hiji',
                    },
                    {
                      trait: '',
                    },
                  ],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              metadata: [
                {
                  anonymousId: '00000000000000000000000000',
                  destinationId: '1ZQVSU9SXNg6KYgZALaqjAO3PIL',
                  destinationType: 'DISCORD',
                  jobId: 129,
                  messageId: '8b8d5937-09bc-49dc-a35e-8cd6370575f8',
                  sourceId: '1YhwKyDcKstudlGxkeN5p2wgsrp',
                },
              ],
              batched: false,
              statusCode: 200,
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

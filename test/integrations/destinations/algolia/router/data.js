const data = [
    {
        "name": "algolia",
        "description": "Test 0",
        "feature": "router",
        "module": "destination",
        "version": "v0",
        "input": {
          "request": {
            "body":{"input":[[
                {
                  "message": {
                    "type": "track",
                    "event": "product list viewed",
                    "sentAt": "2021-10-25T09:40:08.880Z",
                    "userId": "test-user-id1",
                    "channel": "web",
                    "context": {
                      "os": {
                        "name": "",
                        "version": ""
                      },
                      "app": {
                        "name": "RudderLabs JavaScript SDK",
                        "build": "1.0.0",
                        "version": "1.2.1",
                        "namespace": "com.rudderlabs.javascript"
                      },
                      "page": {
                        "url": "http://127.0.0.1:5500/index.html",
                        "path": "/index.html",
                        "title": "Test",
                        "search": "",
                        "tab_url": "http://127.0.0.1:5500/index.html",
                        "referrer": "http://127.0.0.1:5500/index.html",
                        "initial_referrer": "http://127.0.0.1:5500/index.html",
                        "referring_domain": "127.0.0.1:5500",
                        "initial_referring_domain": "127.0.0.1:5500"
                      },
                      "locale": "en-GB",
                      "screen": {
                        "width": 1440,
                        "height": 900,
                        "density": 2,
                        "innerWidth": 1440,
                        "innerHeight": 335
                      },
                      "traits": {
                        "city": "Brussels",
                        "email": "testemail@email.com",
                        "phone": "1234567890",
                        "country": "Belgium",
                        "firstName": "Tintin",
                        "custom_date": 1574769933368,
                        "custom_date1": "2019-10-14T11:15:53.296Z",
                        "custom_flavor": "chocolate"
                      },
                      "library": {
                        "name": "RudderLabs JavaScript SDK",
                        "version": "1.2.1"
                      },
                      "campaign": {},
                      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36"
                    },
                    "rudderId": "e3e907f1-f79a-444b-b91d-da47488f8273",
                    "messageId": "8cdd3d2e-5e07-42ec-abdc-9b6bd4333840",
                    "timestamp": "2021-10-25T15:10:08.888+05:30",
                    "properties": {
                      "index": "products",
                      "queryId": "43b15df305339e827f0ac0bdc5ebcaa7",
                      "products": [
                        {
                          "objectId": "ecommerce-sample-data-919",
                          "position": 7
                        },
                        {
                          "objectId": "9780439784542",
                          "position": 8
                        }
                      ]
                    },
                    "receivedAt": "2021-10-25T15:10:08.889+05:30",
                    "request_ip": "[::1]",
                    "anonymousId": "7138f7d9-5dd2-4337-805d-ca17be59dc8e",
                    "integrations": {
                      "All": true
                    },
                    "originalTimestamp": "2021-10-25T09:40:08.879Z"
                  },
                  "metadata": { "jobId": 1 },
                  "destination": {
                    "ID": "1zzHtStW2ZPlullmz6L7DGnmk9V",
                    "Name": "algolia-dev",
                    "DestinationDefinition": {
                      "ID": "1zgVZhcj1Tij4qlKg7B1Jp16IrH",
                      "Name": "ALGOLIA",
                      "DisplayName": "Algolia",
                      "Config": {
                        "destConfig": {
                          "defaultConfig": ["apiKey", "applicationId", "eventTypeSettings"]
                        },
                        "excludeKeys": [],
                        "includeKeys": [],
                        "saveDestinationResponse": true,
                        "secretKeys": ["apiKey", "applicationId"],
                        "supportedMessageTypes": ["track"],
                        "supportedSourceTypes": [
                          "android",
                          "ios",
                          "web",
                          "unity",
                          "amp",
                          "cloud",
                          "reactnative",
                          "flutter",
                          "cordova"
                        ],
                        "transformAt": "router",
                        "transformAtV1": "router"
                      },
                      "ResponseRules": {}
                    },
                    "Config": {
                      "apiKey": "apiKey",
                      "applicationId": "appId",
                      "eventTypeSettings": [
                        {
                          "from": "product clicked",
                          "to": "click"
                        },
                        {
                          "from": "product list viewed",
                          "to": "view"
                        }
                      ]
                    },
                    "Enabled": true,
                    "Transformations": [],
                    "IsProcessorEnabled": true
                  }
                },
                {
                  "message": {
                    "type": "track",
                    "event": "product clicked",
                    "sentAt": "2021-10-25T09:40:08.886Z",
                    "userId": "test-user-id1",
                    "channel": "web",
                    "context": {
                      "os": {
                        "name": "",
                        "version": ""
                      },
                      "app": {
                        "name": "RudderLabs JavaScript SDK",
                        "build": "1.0.0",
                        "version": "1.2.1",
                        "namespace": "com.rudderlabs.javascript"
                      },
                      "page": {
                        "url": "http://127.0.0.1:5500/index.html",
                        "path": "/index.html",
                        "title": "Test",
                        "search": "",
                        "tab_url": "http://127.0.0.1:5500/index.html",
                        "referrer": "http://127.0.0.1:5500/index.html",
                        "initial_referrer": "http://127.0.0.1:5500/index.html",
                        "referring_domain": "127.0.0.1:5500",
                        "initial_referring_domain": "127.0.0.1:5500"
                      },
                      "locale": "en-GB",
                      "screen": {
                        "width": 1440,
                        "height": 900,
                        "density": 2,
                        "innerWidth": 1440,
                        "innerHeight": 335
                      },
                      "traits": {
                        "city": "Brussels",
                        "email": "testemail@email.com",
                        "phone": "1234567890",
                        "country": "Belgium",
                        "firstName": "Tintin",
                        "custom_date": 1574769933368,
                        "custom_date1": "2019-10-14T11:15:53.296Z",
                        "custom_flavor": "chocolate"
                      },
                      "library": {
                        "name": "RudderLabs JavaScript SDK",
                        "version": "1.2.1"
                      },
                      "campaign": {},
                      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36"
                    },
                    "rudderId": "e3e907f1-f79a-444b-b91d-da47488f8273",
                    "messageId": "7b58e140-b66b-4e88-a5ec-bd6811fc3836",
                    "timestamp": "2021-10-25T15:10:08.943+05:30",
                    "properties": {
                      "index": "products",
                      "filters": ["field1:hello", "val1:val2"]
                    },
                    "receivedAt": "2021-10-25T15:10:08.943+05:30",
                    "request_ip": "[::1]",
                    "anonymousId": "7138f7d9-5dd2-4337-805d-ca17be59dc8e",
                    "integrations": {
                      "All": true
                    },
                    "originalTimestamp": "2021-10-25T09:40:08.886Z"
                  },
                  "metadata": { "jobId": 2 },
                  "destination": {
                    "ID": "1zzHtStW2ZPlullmz6L7DGnmk9V",
                    "Name": "algolia-dev",
                    "DestinationDefinition": {
                      "ID": "1zgVZhcj1Tij4qlKg7B1Jp16IrH",
                      "Name": "ALGOLIA",
                      "DisplayName": "Algolia",
                      "Config": {
                        "destConfig": {
                          "defaultConfig": ["apiKey", "applicationId", "eventTypeSettings"]
                        },
                        "excludeKeys": [],
                        "includeKeys": [],
                        "saveDestinationResponse": true,
                        "secretKeys": ["apiKey", "applicationId"],
                        "supportedMessageTypes": ["track"],
                        "supportedSourceTypes": [
                          "android",
                          "ios",
                          "web",
                          "unity",
                          "amp",
                          "cloud",
                          "reactnative",
                          "flutter",
                          "cordova"
                        ],
                        "transformAt": "router",
                        "transformAtV1": "router"
                      },
                      "ResponseRules": {}
                    },
                    "Config": {
                      "apiKey": "apiKey-2",
                      "applicationId": "appId-2",
                      "eventTypeSettings": [
                        {
                          "from": "product clicked",
                          "to": "click"
                        },
                        {
                          "from": "product list viewed",
                          "to": "view"
                        }
                      ]
                    },
                    "Enabled": true,
                    "Transformations": [],
                    "IsProcessorEnabled": true
                  }
                },
                {
                  "message": {
                    "channel": "web",
                    "context": {
                      "app": {
                        "build": "1.0.0",
                        "name": "RudderLabs JavaScript SDK",
                        "namespace": "com.rudderlabs.javascript",
                        "version": "1.0.0"
                      },
                      "traits": {
                        "email": "testone@gmail.com",
                        "firstName": "test",
                        "lastName": "one"
                      },
                      "library": {
                        "name": "RudderLabs JavaScript SDK",
                        "version": "1.0.0"
                      },
                      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
                      "locale": "en-US",
                      "ip": "0.0.0.0",
                      "os": {
                        "name": "",
                        "version": ""
                      },
                      "screen": {
                        "density": 2
                      },
                      "page": {
                        "path": "/destinations/ometria",
                        "referrer": "",
                        "search": "",
                        "title": "",
                        "url": "https://docs.rudderstack.com/destinations/ometria",
                        "category": "destination",
                        "initial_referrer": "https://docs.rudderstack.com",
                        "initial_referring_domain": "docs.rudderstack.com"
                      }
                    },
                    "type": "track",
                    "messageId": "84e26acc-56a5-4835-8233-591137fca468",
                    "session_id": "3049dc4c-5a95-4ccd-a3e7-d74a7e411f22",
                    "originalTimestamp": "2019-10-14T09:03:17.562Z",
                    "anonymousId": "123456",
                    "event": "product clicked",
                    "userId": "testuserId1",
                    "properties": {
                      "filters": ["field1:hello", "val1:val2"]
                    },
                    "integrations": {
                      "All": true
                    },
                    "sentAt": "2019-10-14T09:03:22.563Z"
                  },
                  "metadata": { "jobId": 3 },
                  "destination": {
                    "Config": {
                      "apiKey": "34d8efa09c5b048bbacc6af157f2e687",
                      "applicationId": "O2YARRI15I",
                      "eventTypeSettings": [
                        {
                          "from": "product clicked",
                          "to": "cLick "
                        }
                      ]
                    }
                  }
                }
              ]],"destType": "algolia"},
            "method": "POST"
          },
          "pathSuffix": ""
        },
        "output": {
          "response": {
            "status": 200,
            "body": {"output": [
                {
                    "error": "Cannot read properties of undefined (reading 'ID')",
                    "statTags": {
                    "destType": "ALGOLIA",
                    "errorCategory": "transformation",
                    "feature": "router",
                    "implementation": "native",
                    "module": "destination",
                    },
                    "statusCode": 400
                  }
            ]}
          }
        }
    }
];

module.exports = {
    data
};
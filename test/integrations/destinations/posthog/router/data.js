const data = [
  {
    name: 'posthog',
    description: 'Successfull Alias Call batching',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                Config: {
                  teamApiKey: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                  yourInstance: 'https://app.posthog.com/',
                },
              },
              metadata: {
                jobId: 2,
              },
              message: {
                event: 'event-alias',
                context: {
                  ip: '0.0.0.0',
                  device: {
                    id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi 6',
                    name: 'xiaomi',
                  },
                  network: {
                    carrier: 'Banglalink',
                  },
                  os: {
                    name: 'android',
                    version: '8.1.0',
                  },
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.7',
                  },
                  traits: {
                    address: {
                      city: 'Dhaka',
                      country: 'Bangladesh',
                    },
                    anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                  },
                },
                type: 'alias',
                timestamp: '2020-11-04T13:21:09.712Z',
                userId: 'uid-1',
                previousId: 'prevId_1',
                anonymousId: 'f3cf54d8-f237-45d2-89f7-ccd70d42cf31',
              },
            },
          ],
          destType: 'posthog',
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
                userId: '',
                method: 'POST',
                endpoint: 'https://app.posthog.com/batch',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    properties: {
                      $set: {
                        address: {
                          city: 'Dhaka',
                          country: 'Bangladesh',
                        },
                        anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                      },
                      $os: 'android',
                      $time: '2020-11-04T13:21:09.712Z',
                      $device_id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                      $ip: '0.0.0.0',
                      $timestamp: '2020-11-04T13:21:09.712Z',
                      $anon_distinct_id: 'f3cf54d8-f237-45d2-89f7-ccd70d42cf31',
                      distinct_id: 'prevId_1',
                      $device_manufacturer: 'Xiaomi',
                      $os_version: '8.1.0',
                      $app_version: '1.1.7',
                      $device_name: 'xiaomi',
                      $network_carrier: 'Banglalink',
                      $app_name: 'RudderLabs JavaScript SDK',
                      $device_model: 'Redmi 6',
                      $app_namespace: 'com.rudderlabs.javascript',
                      $app_build: '1.0.0',
                      alias: 'uid-1',
                    },
                    timestamp: '2020-11-04T13:21:09.712Z',
                    event: '$create_alias',
                    api_key: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                    type: 'alias',
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  teamApiKey: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                  yourInstance: 'https://app.posthog.com/',
                },
              },
            },
          ],
        },
      },
    },
  },
  {
    name: 'posthog',
    description: 'Succesfull Track Call of event Product Brought',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                Config: {
                  teamApiKey: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                },
              },
              metadata: {
                jobId: 2,
              },
              message: {
                anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                event: 'Product Brought',
                context: {
                  ip: '0.0.0.0',
                  device: {
                    id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi 6',
                    name: 'xiaomi',
                  },
                  network: {
                    carrier: 'Banglalink',
                  },
                  os: {
                    name: 'android',
                    version: '8.1.0',
                  },
                  traits: {
                    address: {
                      city: 'Dhaka',
                      country: 'Bangladesh',
                    },
                    anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                  },
                },
                type: 'track',
                properties: {
                  additional_bet_index: 0,
                  battle_id: 'N/A',
                  bet_amount: 9,
                  bet_level: 1,
                  bet_multiplier: 1,
                  coin_balance: 9466052,
                  current_module_name: 'CasinoGameModule',
                  days_in_game: 0,
                  extra_param: 'N/A',
                  fb_profile: '0',
                  featureGameType: 'N/A',
                  game_fps: 30,
                  game_id: 'fireEagleBase',
                  game_name: 'FireEagleSlots',
                  gem_balance: 0,
                  graphicsQuality: 'HD',
                  idfa: '2bf99787-33d2-4ae2-a76a-c49672f97252',
                  internetReachability: 'ReachableViaLocalAreaNetwork',
                  isLowEndDevice: 'False',
                  is_auto_spin: 'False',
                  is_turbo: 'False',
                  isf: 'False',
                  ishighroller: 'False',
                  jackpot_win_amount: 90,
                  jackpot_win_type: 'Silver',
                  level: 6,
                  lifetime_gem_balance: 0,
                  no_of_spin: 1,
                  player_total_battles: 0,
                  player_total_shields: 0,
                  start_date: '2019-08-01',
                  total_payments: 0,
                  tournament_id: 'T1561970819',
                  versionSessionCount: 2,
                  win_amount: 0,
                },
                timestamp: '2020-11-04T13:21:09.712Z',
                userId: 'uid-2',
                messageId: 'e4408cb8-16dd-41e9-a313-a7a9cdc4bac5',
              },
            },
          ],
          destType: 'posthog',
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
                userId: '',
                method: 'POST',
                endpoint: 'https://app.posthog.com/batch',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    distinct_id: 'uid-2',
                    event: 'Product Brought',
                    messageId: 'e4408cb8-16dd-41e9-a313-a7a9cdc4bac5',
                    properties: {
                      $set: {
                        address: {
                          city: 'Dhaka',
                          country: 'Bangladesh',
                        },
                        anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                      },
                      $os: 'android',
                      $time: '2020-11-04T13:21:09.712Z',
                      $device_id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                      $ip: '0.0.0.0',
                      $timestamp: '2020-11-04T13:21:09.712Z',
                      $anon_distinct_id: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                      distinct_id: 'uid-2',
                      $device_manufacturer: 'Xiaomi',
                      $os_version: '8.1.0',
                      $device_name: 'xiaomi',
                      $network_carrier: 'Banglalink',
                      $device_model: 'Redmi 6',
                      additional_bet_index: 0,
                      battle_id: 'N/A',
                      bet_amount: 9,
                      bet_level: 1,
                      bet_multiplier: 1,
                      coin_balance: 9466052,
                      current_module_name: 'CasinoGameModule',
                      days_in_game: 0,
                      extra_param: 'N/A',
                      fb_profile: '0',
                      featureGameType: 'N/A',
                      game_fps: 30,
                      game_id: 'fireEagleBase',
                      game_name: 'FireEagleSlots',
                      gem_balance: 0,
                      graphicsQuality: 'HD',
                      idfa: '2bf99787-33d2-4ae2-a76a-c49672f97252',
                      internetReachability: 'ReachableViaLocalAreaNetwork',
                      isLowEndDevice: 'False',
                      is_auto_spin: 'False',
                      is_turbo: 'False',
                      isf: 'False',
                      ishighroller: 'False',
                      jackpot_win_amount: 90,
                      jackpot_win_type: 'Silver',
                      level: 6,
                      lifetime_gem_balance: 0,
                      no_of_spin: 1,
                      player_total_battles: 0,
                      player_total_shields: 0,
                      start_date: '2019-08-01',
                      total_payments: 0,
                      tournament_id: 'T1561970819',
                      versionSessionCount: 2,
                      win_amount: 0,
                    },
                    timestamp: '2020-11-04T13:21:09.712Z',
                    api_key: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                    type: 'capture',
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  teamApiKey: 'K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE',
                },
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

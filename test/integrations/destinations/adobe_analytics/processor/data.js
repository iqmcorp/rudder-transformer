const data = [{
        "name": "adobe_analytics",
        "description": "Test 0",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"custom event","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      
        "destination": {"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},
        "error": "AA: Unprocessable Event", "statTags": {
        "destType": "ADOBE_ANALYTICS",
        "errorCategory": "transformation",
        "feature": "processor",
        "implementation": "native",
        "module": "destination",
      }, 
      "statusCode": 400
    }]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 1",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 2",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"cart opened","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>scOpen</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 3",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"checkout started","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><purchaseID>undefined</purchaseID><transactionID>undefined</transactionID><events>scCheckout</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 4",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"cart viewed","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>scView</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 5",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"order completed","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><purchaseID>undefined</purchaseID><transactionID>undefined</transactionID><events>purchase</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 6",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"product removed","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>scRemove</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 7",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"product added","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>scAdd</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 8",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"product viewed","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>prodView</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 9",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 10",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 11",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 12",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 13",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 14",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":2,"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      
        "destination": {"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},
        "error": "prop variable is neither a string nor an array", "statTags": {
        "destType": "ADOBE_ANALYTICS",
        "errorCategory": "dataValidation",
        "errorType": "instrumentation",
        "feature": "processor",
        "implementation": "native",
        "module": "destination",
      }, 
      "statusCode": 400
    }]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 15",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 16",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><visitorID>test_user_id</visitorID><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 17",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":true,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><visitorID>test_user_id</visitorID><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 18",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 19",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 20",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}],"productMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"scAdd"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819,scAdd</events><products>;;1;0</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 21",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"id","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}],"productMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"scAdd"}],"productMerchEvarsMap":[{"from":"product_id","to":"2"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}]},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3","product_id":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819,scAdd</events><products>;2;1;0;;eVar2=2</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 22",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"id","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}],"productMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"scAdd"}],"productMerchEvarsMap":[{"from":"product_id","to":"2"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}],"page":{"url":"https://abc.com","name":"testName"}},"event":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3","product_id":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><pageUrl>https://abc.com</pageUrl><pageName>testName</pageName><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819,scAdd</events><products>;2;1;0;;eVar2=2</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 23",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"id","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}],"productMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"scAdd"}],"productMerchEvarsMap":[{"from":"product_id","to":"2"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}],"page":{"url":"https://abc.com","name":"testName"}},"name":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"url":"https://app.rudderstack.com/signup?type=freetrial","path":"/signup","title":"","search":"?type=freetrial","tab_url":"https://app.rudderstack.com/signup?type=freetrial","referrer":"https://rudderstack.medium.com/kafka-vs-postgresql-how-we-implemented-our-queueing-system-using-postgresql-ec128650e3e","initial_referrer":"https://rudderstack.medium.com/kafka-vs-postgresql-how-we-implemented-our-queueing-system-using-postgresql-ec128650e3e","referring_domain":"rudderstack.medium.com","initial_referring_domain":"rudderstack.medium.com","additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3","product_id":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"page"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><pageUrl>https://abc.com</pageUrl><pageName>testName</pageName><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819,scAdd</events><products>;2;1;0;;eVar2=2</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 24",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":false,"timestampOption":"hybrid","timestampOptionalReporting":true,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"id","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"del_1","to":"DEL_1"}],"listMapping":[{"from":"map_1","to":"MAP_1"},{"from":"del_1","to":"DEL_1"}],"propsDelimiter":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"eventMerchProperties":[{"eventMerchProperties":"tournament_id"}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"merchEvent"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":3}],"contextDataMapping":[{"from":"bet_level","to":"rudder_bet_level"}],"hierMapping":[{"from":"game_name","to":"game_dest"}],"productMerchEventToAdobeEvent":[{"from":"Custom Page View","to":"scAdd"}],"productMerchEvarsMap":[{"from":"product_id","to":"2"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"externalId":[{"type":"AdobeFallbackVisitorId","id":1}],"page":{"url":"https://abc.com","name":"testName"}},"name":"Custom Page View","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"url":"https://app.rudderstack.com/signup?type=freetrial","path":"/signup","title":"","search":"?type=freetrial","tab_url":"https://app.rudderstack.com/signup?type=freetrial","referrer":"https://rudderstack.medium.com/kafka-vs-postgresql-how-we-implemented-our-queueing-system-using-postgresql-ec128650e3e","initial_referrer":"https://rudderstack.medium.com/kafka-vs-postgresql-how-we-implemented-our-queueing-system-using-postgresql-ec128650e3e","referring_domain":"rudderstack.medium.com","initial_referring_domain":"rudderstack.medium.com","additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"v1":1,"v2":2,"del_1":"delimeter","map_1":1,"c2":[2,3,4],"c3":"3","product_id":2},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"screen"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><contextData><rudder_bet_level>1</rudder_bet_level></contextData><eVar1>1</eVar1><eVar2>2</eVar2><fallbackVisitorId>1</fallbackVisitorId><hiergame_dest>FireEagleSlots</hiergame_dest><listDEL_1>delimeter</listDEL_1><pageUrl>https://abc.com</pageUrl><pageName>testName</pageName><prop2>22324</prop2><prop3>3</prop3><timestamp>2019-09-01T15:46:51.693Z</timestamp><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>event1,merchEvent=T1561970819,scAdd</events><products>;2;1;0;;eVar2=2</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 25",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":"prop1"},{"eventMerchProperties":"prop2"},{"eventMerchProperties":"prop3"}],"productMerchProperties":[{"productMerchProperties":"prop1"},{"productMerchProperties":"products.product_id"}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"order completed","to":"abc completed"},{"from":"checkout started","to":"cde completed"}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}],"productMerchEventToAdobeEvent":[{"from":"checkout started","to":"scCheckOut"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"checkout started","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"prop1":"testPropVal1","prop2":"testPropVal2","prop3":"testPropVal3","additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0,"products":[{"product_id":"prodID1","name":"Monopoly: 3rd Edition","coupon":"SUMMER_FUN","category":"Apparel","brand":"Google","variant":"green","price":"19","quantity":"2","position":"1","affiliation":"Google Merchandise Store","currency":"USD","discount":2.22,"item_category2":"Adult","item_category3":"Shirts","item_category4":"Crew","item_category5":"Short sleeve","item_list_id":"related_products","item_list_name":"Related Products","location_id":"L_12345"},{"product_id":"prodID2","name":"Monopoly: 3rd Edition","coupon":"SUMMER_FUN","category":"Apparel","brand":"Google","variant":"green","price":"19","quantity":"2","position":"1","affiliation":"Google Merchandise Store","currency":"USD","discount":2.22,"item_category2":"Adult","item_category3":"Shirts","item_category4":"Crew","item_category5":"Short sleeve","item_list_id":"related_products","item_list_name":"Related Products","location_id":"L_12345"}]},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><purchaseID>undefined</purchaseID><transactionID>undefined</transactionID><events>scCheckout,cde completed=testPropVal1,cde completed=testPropVal2,cde completed=testPropVal3,scCheckOut</events><products>Apparel;Monopoly: 3rd Edition;2;38.00;scCheckOut=testPropVal1|scCheckOut=prodID1;Apparel;Monopoly: 3rd Edition;2;38.00;scCheckOut=testPropVal1|scCheckOut=prodID2;</products><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     },{
        "name": "adobe_analytics",
        "description": "Test 26",
        "feature": "processor",
        "module": "destination",
        "version": "v0",
        "input": {
            "request": {
                "body": [
                    {"destination":{"Config":{"trackingServerUrl":"http://sadobemetrics.dr.dk","trackingServerSecureUrl":"https://sadobemetrics.dr.dk","reportSuiteIds":"drdev2","sslHeartbeat":true,"heartbeatTrackingServerUrl":"","useUtf8Charset":true,"useSecureServerSide":true,"proxyNormalUrl":"","proxyHeartbeatUrl":"","marketingCloudOrgId":"00E287634SDFE6200A495E6B@AdobeOrg","dropVisitorId":true,"timestampOption":"disabled","timestampOptionalReporting":false,"noFallbackVisitorId":false,"preferVisitorId":false,"trackPageName":true,"contextDataPrefix":"","useLegacyLinkName":true,"pageNameFallbackTostring":true,"sendFalseValues":true,"productIdentifier":"name","eventsToTypes":[{"from":"","to":""}],"listDelimiter":[{"from":"","to":""}],"propsDelimiter":[{"from":"","to":""}],"eventMerchProperties":[{"eventMerchProperties":""}],"productMerchProperties":[{"productMerchProperties":""}],"eVarMapping":[{"from":"v1","to":"1"},{"from":"v2","to":"2"},{"from":"v3","to":"3"},{"from":"v12","to":"12"},{"from":"v13","to":"13"},{"from":"v16","to":"16"},{"from":"v17","to":"17"},{"from":"v40","to":"40"},{"from":"v41","to":"41"},{"from":"v42","to":"42"},{"from":"v69","to":"69"},{"from":"v70","to":"70"},{"from":"v89","to":"89"}],"eventDelivery":false,"eventDeliveryTS":1628171489456,"rudderEventsToAdobeEvents":[{"from":"Custom Page View","to":"event1"},{"from":"App Launch","to":"event31"},{"from":"App Start","to":"event31"}],"useNativeSDK":{"web":false},"eventMerchEventToAdobeEvent":[{"from":"","to":""}],"customPropsMapping":[{"from":"c2","to":"2"},{"from":"c3","to":"3"}]}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","context":{"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"event":"checkout started","integrations":{"AM":true},"message_id":"a80f82be-9bdc-4a9f-b2a5-15621ee41df8","properties":{"order_id":"oid100"},"userId":"test_user_id","timestamp":"2019-09-01T15:46:51.693Z","type":"track"}},
                ],
                "method": "POST",
            },
            "pathSuffix": "",
        },
        "output":{
            "response": {
                "status": 200,
                "body": [{
      "output": 
      {"version":"1","type":"REST","method":"POST","endpoint":"https://sadobemetrics.dr.dk/b/ss//6","headers":{"Content-type":"application/xml"},"params":{},"body":{"JSON":{},"JSON_ARRAY":{},"XML":{"payload":"<?xml version=\"1.0\" encoding=\"utf-8\"?><request><purchaseID>oid100</purchaseID><transactionID>oid100</transactionID><marketingcloudorgid>00E287634SDFE6200A495E6B@AdobeOrg</marketingcloudorgid><events>scCheckout</events><products/><reportSuiteID>drdev2</reportSuiteID></request>"},"FORM":{}},"files":{},"userId":""}, 
      "statusCode": 200}]
            }
        } 
     }]; module.exports = {
    data
}
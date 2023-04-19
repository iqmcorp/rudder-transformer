"use strict";
const { getMappingConfig } = require('../../util');
const baseEndpoint = 'https://heapanalytics.com/api';
const endpoints = {
    trackUrl: `${baseEndpoint}/track`,
    identifyUrl: `${baseEndpoint}/add_user_properties`, // identify a user| Identify
};
const CONFIG_CATEGORIES = {
    IDENTIFY: { endPoint: endpoints.identifyUrl, name: 'HEAPIdentifyConfig' },
    TRACK: { endPoint: endpoints.trackUrl, name: 'HEAPTrackConfig' },
};
const MAPPING_CONFIG = getMappingConfig(CONFIG_CATEGORIES, __dirname);
module.exports = {
    CONFIG_CATEGORIES,
    MAPPING_CONFIG,
};
//# sourceMappingURL=config.js.map
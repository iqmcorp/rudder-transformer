"use strict";
const { getMappingConfig } = require('../../util');
const ConfigCategory = {
    PAGE: {
        name: 'ShynetPageConfig',
    },
};
const mappingConfig = getMappingConfig(ConfigCategory, __dirname);
module.exports = {
    ConfigCategory,
    mappingConfig,
};
//# sourceMappingURL=config.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../routes/utils/constants");
const cdkV1Integration_1 = __importDefault(require("../services/destination/cdkV1Integration"));
const cdkV2Integration_1 = __importDefault(require("../services/destination/cdkV2Integration"));
const nativeIntegration_1 = __importDefault(require("../services/destination/nativeIntegration"));
const nativeIntegration_2 = __importDefault(require("../services/source/nativeIntegration"));
const errorTypes_1 = require("../v0/util/errorTypes");
const comparator_1 = __importDefault(require("../services/comparator"));
class ServiceSelector {
    static isCdkDestination(destinationDefinitionConfig) {
        return !!destinationDefinitionConfig?.['cdkEnabled'];
    }
    static isCdkV2Destination(destinationDefinitionConfig) {
        return (process.env.CDK_V2_Enabled === 'true' &&
            Boolean(destinationDefinitionConfig?.['cdkV2Enabled']));
    }
    static isComparatorEnabled(destinationDefinitionConfig) {
        return (process.env.COMPARATOR_ENABLED === 'true' &&
            !!destinationDefinitionConfig['comparisonTestEnabeld']);
    }
    static getSecondaryServiceName(destinationDefinitionConfig) {
        return destinationDefinitionConfig['comparisonService'];
    }
    static fetchCachedService(serviceType) {
        if (this.serviceMap.has(serviceType)) {
            return this.serviceMap.get(serviceType);
        }
        const Service = this.services[serviceType];
        if (!Service) {
            throw new errorTypes_1.PlatformError('Invalid Service');
        }
        this.serviceMap.set(serviceType, new Service());
        return this.serviceMap.get(serviceType);
    }
    static getNativeDestinationService() {
        return this.fetchCachedService(constants_1.INTEGRATION_SERVICE.NATIVE_DEST);
    }
    static getNativeSourceService() {
        return this.fetchCachedService(constants_1.INTEGRATION_SERVICE.NATIVE_SOURCE);
    }
    static getDestinationServiceByName(name) {
        return this.fetchCachedService(name);
    }
    static getPrimaryDestinationService(events) {
        const destinationDefinitionConfig = events[0]?.destination?.DestinationDefinition?.Config;
        if (this.isCdkDestination(destinationDefinitionConfig)) {
            return this.fetchCachedService(constants_1.INTEGRATION_SERVICE.CDK_V1_DEST);
        }
        else if (this.isCdkV2Destination(destinationDefinitionConfig)) {
            return this.fetchCachedService(constants_1.INTEGRATION_SERVICE.CDK_V2_DEST);
        }
        else {
            return this.fetchCachedService(constants_1.INTEGRATION_SERVICE.NATIVE_DEST);
        }
    }
    static getSourceService(arg) {
        // Implement source event based descision logic for selecting service
    }
    static getDestinationService(events) {
        const destinationDefinition = events[0]?.destination?.DestinationDefinition;
        const destinationDefinitionConfig = destinationDefinition.Config;
        const primaryService = this.getPrimaryDestinationService(events);
        if (!this.isComparatorEnabled(destinationDefinitionConfig)) {
            return primaryService;
        }
        const comparatorServiceStateKey = `${destinationDefinition.ID}#${constants_1.INTEGRATION_SERVICE.COMPARATOR}`;
        if (this.serviceMap.has(comparatorServiceStateKey)) {
            return this.serviceMap.get(comparatorServiceStateKey);
        }
        const secondaryServiceName = this.getSecondaryServiceName(destinationDefinitionConfig);
        const secondaryService = this.getDestinationServiceByName(secondaryServiceName);
        const comparatorService = new comparator_1.default(primaryService, secondaryService);
        this.serviceMap.set(comparatorServiceStateKey, comparatorService);
        return comparatorService;
    }
}
ServiceSelector.serviceMap = new Map();
ServiceSelector.services = {
    [constants_1.INTEGRATION_SERVICE.CDK_V1_DEST]: cdkV1Integration_1.default,
    [constants_1.INTEGRATION_SERVICE.CDK_V2_DEST]: cdkV2Integration_1.default,
    [constants_1.INTEGRATION_SERVICE.NATIVE_DEST]: nativeIntegration_1.default,
    [constants_1.INTEGRATION_SERVICE.NATIVE_SOURCE]: nativeIntegration_2.default,
};
exports.default = ServiceSelector;
//# sourceMappingURL=serviceSelector.js.map
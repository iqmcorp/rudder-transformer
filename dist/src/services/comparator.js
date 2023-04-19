"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = __importDefault(require("../v0/util/tags"));
const stats_1 = __importDefault(require("../util/stats"));
const logger_1 = __importDefault(require("../logger"));
const common_1 = require("../util/common");
const NS_PER_SEC = 1e9;
class ComparatorService {
    constructor(primaryService, secondaryService) {
        this.primaryService = primaryService;
        this.secondaryService = secondaryService;
    }
    init() {
        this.primaryService.init();
        this.secondaryService.init();
    }
    getName() {
        return 'Comparator';
    }
    getTags(destType, destinationId, workspaceId, feature) {
        const metaTO = {
            errorDetails: {
                destType: destType.toUpperCase(),
                module: tags_1.default.MODULES.DESTINATION,
                implementation: this.primaryService.getName(),
                feature,
                destinationId,
                workspaceId,
            },
            errorContext: '[Native Integration Service] Comparator Service Failure',
        };
        return metaTO;
    }
    getTestThreshold(destination) {
        return destination.DestinationDefinition?.Config['camparisonTestThreshold'] || 0;
    }
    getComparisonLogs(primaryResplist, secondaryResplist, destinationId, destination, feature) {
        if (primaryResplist.length !== secondaryResplist.length) {
            logger_1.default.error(`[LIVE_COMPARE_TEST] failed for destinationId=${destinationId}, destType=${destination}, feature=${feature}, ${this.primaryService.getName()} output size: ${primaryResplist.length},  ${this.secondaryService.getName()} output size: ${secondaryResplist.length}`);
            return;
        }
        for (let index = 0; index < primaryResplist.length; index++) {
            const objectDiff = common_1.CommonUtils.objectDiff(primaryResplist[index], secondaryResplist[index]);
            if (Object.keys(objectDiff).length > 0) {
                logger_1.default.error(`[LIVE_COMPARE_TEST] failed for destinationId=${destinationId}, destType=${destination}, feature=${feature}, diff_keys=${JSON.stringify(Object.keys(objectDiff))}`);
                //   logger.error(
                //     `[LIVE_COMPARE_TEST] failed for  destinationId=${destinationId}, destType=${destination}, feature=${feature}, diff=${JSON.stringify(
                //       objectDiff,
                //     )}`,
                //   );
                //   logger.error(
                //     `[LIVE_COMPARE_TEST] failed for  destinationId=${destinationId}, destType=${destination}, feature=${feature}, input=${JSON.stringify(
                //       events[0],
                //     )}`,
                //   );
                //   logger.error(
                //     `[LIVE_COMPARE_TEST] failed for  destinationId=${destinationId}, destType=${destination}, feature=${feature}, results=${JSON.stringify(
                //       {
                //         primaryResult: primaryResplist[index],
                //         secondaryResult: secondaryResplist[index],
                //       },
                //     )}`,
                //   );
            }
        }
    }
    getComaprisonStats(primaryResplist, secondaryResplist, destinationId, destination, feature) {
        if (primaryResplist.length !== secondaryResplist.length) {
            stats_1.default.counter('compare_test_failed_count', 1, {
                destinationId,
                destination,
                feature,
            });
            return;
        }
        let hasComparisonFailed = false;
        for (let index = 0; index < primaryResplist.length; index++) {
            const objectDiff = common_1.CommonUtils.objectDiff(primaryResplist[index], secondaryResplist[index]);
            if (Object.keys(objectDiff).length > 0) {
                stats_1.default.counter('compare_test_failed_count', 1, {
                    destinationId,
                    destination,
                    feature,
                });
                hasComparisonFailed = true;
            }
        }
        if (!hasComparisonFailed) {
            stats_1.default.counter('compare_test_success_count', 1, {
                destinationId,
                destination,
                feature,
            });
        }
    }
    async compare(events, primaryResplist, secondaryServiceCallback, destinationType, version, requestMetadata, feature, destinationId) {
        const secondaryStartTime = process.hrtime();
        const secondaryResplist = await secondaryServiceCallback(events, destinationType, version, requestMetadata);
        const secondaryTimeDiff = process.hrtime(secondaryStartTime);
        const secondaryTime = secondaryTimeDiff[0] * NS_PER_SEC + secondaryTimeDiff[1];
        stats_1.default.gauge(`${this.secondaryService.getName()}_transformation_time`, secondaryTime, {
            destination: destinationType,
            feature,
        });
        this.getComaprisonStats(primaryResplist, secondaryResplist, destinationId, destinationType, feature);
        this.getComparisonLogs(primaryResplist, secondaryResplist, destinationId, destinationType, feature);
    }
    async doProcessorTransformation(events, destinationType, version, requestMetadata) {
        const destinationId = events[0].destination.ID;
        const primaryStartTime = process.hrtime();
        const primaryResplist = await this.primaryService.doProcessorTransformation(events, destinationType, version, requestMetadata);
        const primaryTimeDiff = process.hrtime(primaryStartTime);
        const primaryTime = primaryTimeDiff[0] * NS_PER_SEC + primaryTimeDiff[1];
        stats_1.default.gauge(`${this.primaryService.getName()}_transformation_time`, primaryTime, {
            destinationId,
            destination: destinationType,
            feature: tags_1.default.FEATURES.PROCESSOR,
        });
        try {
            const envThreshold = parseFloat(process.env.COMPARISON_TEST || '0');
            const destThreshold = this.getTestThreshold(events[0].destination);
            const compareTestThreshold = envThreshold * destThreshold;
            if (Number.isNaN(compareTestThreshold) ||
                !compareTestThreshold ||
                compareTestThreshold < Math.random()) {
                return primaryResplist;
            }
            this.compare(events, primaryResplist, this.secondaryService.doProcessorTransformation, destinationType, version, requestMetadata, tags_1.default.FEATURES.PROCESSOR, destinationId);
        }
        catch (error) {
            stats_1.default.counter('compare_test_failed_count', 1, {
                destinationId,
                destination: destinationType,
                feature: tags_1.default.FEATURES.PROCESSOR,
            });
            logger_1.default.error(`[LIVE_COMPARE_TEST] errored for destinationId=${destinationId}, destType=${destinationType}, feature=${tags_1.default.FEATURES.PROCESSOR}`, error);
        }
        return primaryResplist;
    }
    async doRouterTransformation(events, destinationType, version, requestMetadata) {
        const destinationId = events[0].destination.ID;
        const primaryStartTime = process.hrtime();
        const primaryResplist = await this.primaryService.doRouterTransformation(events, destinationType, version, requestMetadata);
        const primaryTimeDiff = process.hrtime(primaryStartTime);
        const primaryTime = primaryTimeDiff[0] * NS_PER_SEC + primaryTimeDiff[1];
        stats_1.default.gauge(`${this.primaryService.getName()}_transformation_time`, primaryTime, {
            destinationId,
            destination: destinationType,
            feature: tags_1.default.FEATURES.ROUTER,
        });
        try {
            const envThreshold = parseFloat(process.env.COMPARISON_TEST || '0');
            const destThreshold = this.getTestThreshold(events[0].destination);
            const compareTestThreshold = envThreshold * destThreshold;
            if (Number.isNaN(compareTestThreshold) ||
                !compareTestThreshold ||
                compareTestThreshold < Math.random()) {
                return primaryResplist;
            }
            this.compare(events, primaryResplist, this.secondaryService.doRouterTransformation, destinationType, version, requestMetadata, tags_1.default.FEATURES.ROUTER, destinationId);
        }
        catch (error) {
            stats_1.default.counter('compare_test_failed_count', 1, {
                destinationId,
                destination: destinationType,
                feature: tags_1.default.FEATURES.ROUTER,
            });
            logger_1.default.error(`[LIVE_COMPARE_TEST] errored for destinationId=${destinationId}, destType=${destinationType}, feature=${tags_1.default.FEATURES.ROUTER}`, error);
        }
        return primaryResplist;
    }
    doBatchTransformation(events, destinationType, version, requestMetadata) {
        const destinationId = events[0].destination.ID;
        const primaryStartTime = process.hrtime();
        const primaryResplist = this.primaryService.doBatchTransformation(events, destinationType, version, requestMetadata);
        const primaryTimeDiff = process.hrtime(primaryStartTime);
        const primaryTime = primaryTimeDiff[0] * NS_PER_SEC + primaryTimeDiff[1];
        stats_1.default.gauge(`${this.primaryService.getName()}_transformation_time`, primaryTime, {
            destinationId,
            destination: destinationType,
            feature: tags_1.default.FEATURES.BATCH,
        });
        try {
            const envThreshold = parseFloat(process.env.COMPARISON_TEST || '0');
            const destThreshold = this.getTestThreshold(events[0].destination);
            const compareTestThreshold = envThreshold * destThreshold;
            if (Number.isNaN(compareTestThreshold) ||
                !compareTestThreshold ||
                compareTestThreshold < Math.random()) {
                return primaryResplist;
            }
            this.compare(events, primaryResplist, this.secondaryService.doBatchTransformation, destinationType, version, requestMetadata, tags_1.default.FEATURES.BATCH, destinationId);
        }
        catch (error) {
            stats_1.default.counter('compare_test_failed_count', 1, {
                destinationId,
                destination: destinationType,
                feature: tags_1.default.FEATURES.BATCH,
            });
            logger_1.default.error(`[LIVE_COMPARE_TEST] errored for destinationId=${destinationId}, destType=${destinationType}, feature=${tags_1.default.FEATURES.BATCH}`, error);
        }
        return primaryResplist;
    }
    async deliver(event, destinationType, requestMetadata) {
        const primaryResplist = await this.primaryService.deliver(event, destinationType, requestMetadata);
        logger_1.default.error('[LIVE_COMPARE_TEST] not implemented for delivery routine');
        return primaryResplist;
    }
    async processUserDeletion(requests, rudderDestInfo) {
        const primaryResplist = await this.primaryService.processUserDeletion(requests, rudderDestInfo);
        logger_1.default.error('[LIVE_COMPARE_TEST] not implemented for deletion routine');
        return primaryResplist;
    }
}
exports.default = ComparatorService;
//# sourceMappingURL=comparator.js.map
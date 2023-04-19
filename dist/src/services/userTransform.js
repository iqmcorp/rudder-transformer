"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groupBy_1 = __importDefault(require("lodash/groupBy"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const routerUtils_1 = require("../routerUtils");
const utils_1 = require("../util/utils");
const util_1 = require("../v0/util");
const logger_1 = __importDefault(require("../logger"));
const stats_1 = __importDefault(require("../util/stats"));
class UserTransformService {
    static async transformRoutine(events) {
        const startTime = new Date();
        let retryStatus = 200;
        const groupedEvents = (0, groupBy_1.default)(events, (event) => `${event.metadata.destinationId}_${event.metadata.sourceId}`);
        stats_1.default.counter('user_transform_function_group_size', Object.entries(groupedEvents).length, {});
        stats_1.default.counter('user_transform_input_events', events.length, {});
        const transformedEvents = [];
        let librariesVersionIDs = [];
        if (events[0].libraries) {
            librariesVersionIDs = events[0].libraries.map((library) => library.VersionID);
        }
        const responses = await Promise.all(Object.entries(groupedEvents).map(async ([dest, destEvents]) => {
            logger_1.default.debug(`dest: ${dest}`);
            const eventsToProcess = destEvents;
            const transformationVersionId = eventsToProcess[0]?.destination?.Transformations[0]?.VersionID;
            const messageIds = eventsToProcess.map((ev) => {
                return ev.metadata?.messageId;
            });
            const commonMetadata = {
                sourceId: eventsToProcess[0]?.metadata?.sourceId,
                destinationId: eventsToProcess[0]?.metadata.destinationId,
                destinationType: eventsToProcess[0]?.metadata.destinationType,
                messageIds,
            };
            const metaTags = eventsToProcess.length && eventsToProcess[0].metadata
                ? (0, util_1.getMetadata)(eventsToProcess[0].metadata)
                : {};
            if (!transformationVersionId) {
                const errorMessage = 'Transformation VersionID not found';
                logger_1.default.error(`[CT] ${errorMessage}`);
                transformedEvents.push({
                    statusCode: 400,
                    error: errorMessage,
                    metadata: commonMetadata,
                });
                stats_1.default.counter('user_transform_errors', eventsToProcess.length, {
                    transformationVersionId,
                    type: "NoVersionId",
                    ...metaTags,
                });
                return transformedEvents;
            }
            const userFuncStartTime = new Date();
            try {
                stats_1.default.counter('user_transform_function_input_events', eventsToProcess.length, { ...metaTags });
                const destTransformedEvents = await (0, routerUtils_1.userTransformHandler)()(eventsToProcess, transformationVersionId, librariesVersionIDs);
                transformedEvents.push(...destTransformedEvents.map((ev) => {
                    if (ev.error) {
                        return {
                            statusCode: 400,
                            error: ev.error,
                            metadata: (0, isEmpty_1.default)(ev.metadata) ? commonMetadata : ev.metadata,
                        };
                    }
                    if (!(0, util_1.isNonFuncObject)(ev.transformedEvent)) {
                        return {
                            statusCode: 400,
                            error: `returned event in events from user transformation is not an object. transformationVersionId:${transformationVersionId} and returned event: ${JSON.stringify(ev.transformedEvent)}`,
                            metadata: (0, isEmpty_1.default)(ev.metadata) ? commonMetadata : ev.metadata,
                        };
                    }
                    return {
                        output: ev.transformedEvent,
                        metadata: (0, isEmpty_1.default)(ev.metadata) ? commonMetadata : ev.metadata,
                        statusCode: 200,
                    };
                }));
            }
            catch (error) {
                logger_1.default.error(error);
                let status = 400;
                const errorString = error.toString();
                if (error instanceof utils_1.RetryRequestError) {
                    // entire request needs to be retried i.e. request to transformer needs be retried
                    retryStatus = error.statusCode;
                }
                if (error instanceof utils_1.RespStatusError) {
                    status = error.statusCode;
                }
                transformedEvents.push(...eventsToProcess.map((e) => {
                    return {
                        statusCode: status,
                        metadata: e.metadata,
                        error: errorString,
                    };
                }));
                stats_1.default.counter('user_transform_errors', eventsToProcess.length, {
                    transformationVersionId,
                    type: "UnknownError",
                    status,
                    ...metaTags,
                });
            }
            finally {
                stats_1.default.timing('user_transform_function_latency', userFuncStartTime, {
                    transformationVersionId,
                    ...metaTags,
                });
            }
            stats_1.default.timing('user_transform_request_latency', startTime, {});
            stats_1.default.counter('user_transform_requests', 1, {});
            stats_1.default.counter('user_transform_output_events', transformedEvents.length, {});
            return transformedEvents;
        }));
        const flattenedResponses = responses.flat();
        return {
            transformedEvents: flattenedResponses,
            retryStatus,
        };
    }
    static async testTransformRoutine(events, trRevCode, libraryVersionIDs) {
        let response = {};
        try {
            if (!trRevCode || !trRevCode.code || !trRevCode.codeVersion) {
                throw new Error('Invalid Request. Missing parameters in transformation code block');
            }
            if (!events || events.length === 0) {
                throw new Error('Invalid request. Missing events');
            }
            logger_1.default.debug(`[CT] Test Input Events: ${JSON.stringify(events)}`);
            trRevCode.versionId = 'testVersionId';
            response.body = await (0, routerUtils_1.userTransformHandler)()(events, trRevCode.versionId, libraryVersionIDs, trRevCode, true);
            logger_1.default.debug(`[CT] Test Output Events: ${JSON.stringify(response.body.transformedEvents)}`);
            response.status = 200;
        }
        catch (error) {
            response.status = 400;
            response.body = { error: error.message };
        }
        return response;
    }
}
exports.default = UserTransformService;
//# sourceMappingURL=userTransform.js.map
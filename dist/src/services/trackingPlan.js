"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const utils_1 = require("../util/utils");
const util_1 = require("../v0/util");
const eventValidation_1 = __importDefault(require("../util/eventValidation"));
const stats_1 = __importDefault(require("../util/stats"));
class TrackingPlanservice {
    static async validateTrackingPlan(events, requestSize, reqParams) {
        const requestStartTime = new Date();
        const respList = [];
        const metaTags = events[0].metadata ? (0, util_1.getMetadata)(events[0].metadata) : {};
        let ctxStatusCode = 200;
        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const eventStartTime = new Date();
            try {
                const parsedEvent = event;
                parsedEvent.request = { query: reqParams };
                const hv = await eventValidation_1.default.handleValidation(parsedEvent);
                if (hv['dropEvent']) {
                    const errMessage = `Error occurred while validating because : ${hv['violationType']}`;
                    respList.push({
                        output: event.message,
                        metadata: event.metadata,
                        statusCode: 400,
                        validationErrors: hv['validationErrors'],
                        error: errMessage,
                    });
                    stats_1.default.counter('hv_violation_type', 1, {
                        violationType: hv['violationType'],
                        ...metaTags,
                    });
                }
                else {
                    respList.push({
                        output: event.message,
                        metadata: event.metadata,
                        statusCode: 200,
                        validationErrors: hv['validationErrors'],
                    });
                    stats_1.default.counter('hv_propagated_events', 1, {
                        ...metaTags,
                    });
                }
            }
            catch (error) {
                const errMessage = `Error occurred while validating : ${error}`;
                logger_1.default.error(errMessage);
                let status = 200;
                if (error instanceof utils_1.RetryRequestError) {
                    ctxStatusCode = error.statusCode;
                }
                if (error instanceof utils_1.RespStatusError) {
                    status = error.statusCode;
                }
                respList.push({
                    output: event.message,
                    metadata: event.metadata,
                    statusCode: status,
                    validationErrors: [],
                    error: errMessage,
                });
                stats_1.default.counter('hv_errors', 1, {
                    ...metaTags,
                });
            }
            finally {
                stats_1.default.timing('hv_event_latency', eventStartTime, {
                    ...metaTags,
                });
            }
            stats_1.default.counter('hv_events_count', events.length, {
                ...metaTags,
            });
            stats_1.default.counter('hv_request_size', requestSize, {
                ...metaTags,
            });
            stats_1.default.timing('hv_request_latency', requestStartTime, {
                ...metaTags,
            });
        }
        return { body: respList, status: ctxStatusCode };
    }
}
exports.default = TrackingPlanservice;
//# sourceMappingURL=trackingPlan.js.map
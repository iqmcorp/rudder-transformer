"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../v0/util");
const errorReporting_1 = __importDefault(require("../errorReporting"));
class PostTransformationSourceService {
    static handleFailureEventsSource(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        const response = {
            statusCode: errObj.status,
            error: errObj.message || '[Source Transform] Error occurred while processing payload.',
            statTags: errObj.statTags,
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, response);
        return response;
    }
    static handleSuccessEventsSource(events) {
        // We send response back to the source
        // through outputToSource. This is not sent to gateway
        // We will not return array for events not meant for gateway
        if (Object.prototype.hasOwnProperty.call(events, 'outputToSource')) {
            return events;
        }
        else if (Array.isArray(events)) {
            return { output: { batch: events } };
        }
        else {
            return { output: { batch: [events] } };
        }
    }
}
exports.default = PostTransformationSourceService;
//# sourceMappingURL=postTransformation.js.map
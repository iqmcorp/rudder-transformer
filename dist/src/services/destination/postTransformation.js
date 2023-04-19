"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const isObject_1 = __importDefault(require("lodash/isObject"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const util_1 = require("../../v0/util");
const errorReporting_1 = __importDefault(require("../errorReporting"));
class DestinationPostTransformationService {
    static handleProcessorTransformSucessEvents(event, transformedPayloads, destHandler) {
        if (!Array.isArray(transformedPayloads)) {
            transformedPayloads = [transformedPayloads];
        }
        const result = transformedPayloads.map((transformedPayload) => {
            let { userId } = transformedPayload;
            if (!userId) {
                userId = '';
            }
            else {
                userId = `${userId}`;
            }
            return {
                output: { ...transformedPayload, userId },
                metadata: destHandler?.processMetadata
                    ? destHandler.processMetadata({
                        metadata: event.metadata,
                        inputEvent: event,
                        outputEvent: transformedPayload,
                    })
                    : event.metadata,
                statusCode: 200,
            };
        });
        return result;
    }
    static handleProcessorTransformFailureEvents(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        const resp = {
            metadata: metaTO.metadata,
            statusCode: errObj.status,
            error: errObj.message || '[Processor Transform] Error occurred while processing the payload.',
            statTags: errObj.statTags,
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, resp);
        return resp;
    }
    static handleRouterTransformSuccessEvents(transformedPayloads, destHandler, metaTO) {
        let resultantPayloads = (0, cloneDeep_1.default)(transformedPayloads);
        resultantPayloads.forEach((resultantPayload) => {
            if (resultantPayload.batchedRequest && resultantPayload.batchedRequest.userId) {
                resultantPayload.batchedRequest.userId = `${resultantPayload.batchedRequest.userId}`;
            }
        });
        if (destHandler?.processMetadataForRouter) {
            return resultantPayloads.map((resultantPayload) => {
                resultantPayload.metadata = destHandler.processMetadataForRouter(resultantPayload);
                return resultantPayload;
            });
        }
        resultantPayloads
            .filter((resp) => 'error' in resp && (0, isObject_1.default)(resp.statTags) && !(0, isEmpty_1.default)(resp.statTags))
            .forEach((resp) => {
            resp.statTags = {
                ...resp.statTags,
                ...metaTO.errorDetails,
            };
        });
        return resultantPayloads;
    }
    static handleRouterTransformFailureEvents(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        const resp = {
            metadata: metaTO.metadatas,
            batched: false,
            statusCode: errObj.status,
            error: errObj.message || '[Router Transform] Error occurred while processing the payload.',
            statTags: errObj.statTags,
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, resp);
        return resp;
    }
    static handleBatchTransformFailureEvents(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        const resp = {
            metadata: metaTO.metadatas,
            batched: false,
            statusCode: 500,
            error: errObj.message || '[Batch Transform] Error occurred while processing payload.',
            statTags: errObj.statTags,
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, resp);
        return resp;
    }
    static handleDeliveryFailureEvents(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        const resp = {
            status: errObj.status,
            message: errObj.message || '[Delivery] Error occured while processing payload',
            destinationResponse: errObj.destinationResponse,
            statTags: errObj.statTags,
            ...(errObj.authErrorCategory && {
                authErrorCategory: errObj.authErrorCategory,
            }),
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, resp);
        return resp;
    }
    static handleUserDeletionFailureEvents(error, metaTO) {
        const errObj = (0, util_1.generateErrorObject)(error, metaTO.errorDetails);
        //TODO: Add stat tags here
        const resp = {
            statusCode: errObj.status,
            error: errObj.message,
            ...(errObj.authErrorCategory && {
                authErrorCategory: errObj.authErrorCategory,
            }),
        };
        errorReporting_1.default.reportError(error, metaTO.errorContext, resp);
        return resp;
    }
}
exports.default = DestinationPostTransformationService;
//# sourceMappingURL=postTransformation.js.map
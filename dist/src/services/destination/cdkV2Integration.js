"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groupBy_1 = __importDefault(require("lodash/groupBy"));
const handler_1 = require("../../cdk/v2/handler");
const errorTypes_1 = require("../../v0/util/errorTypes");
const tags_1 = __importDefault(require("../../v0/util/tags"));
const postTransformation_1 = __importDefault(require("./postTransformation"));
class CDKV2DestinationService {
    init() { }
    getName() {
        return 'CDK_V2';
    }
    getTags(destType, destinationId, workspaceId, feature) {
        const metaTO = {
            errorDetails: {
                destType: destType.toUpperCase(),
                module: tags_1.default.MODULES.DESTINATION,
                implementation: tags_1.default.IMPLEMENTATIONS.CDK_V2,
                feature,
                destinationId,
                workspaceId,
            },
            errorContext: '[CDKV2 Integration Service] Failure During Router Transform',
        };
        return metaTO;
    }
    async doProcessorTransformation(events, destinationType, _version, _requestMetadata) {
        // TODO: Change the promise type
        const respList = await Promise.all(events.map(async (event) => {
            try {
                let transformedPayloads = await (0, handler_1.processCdkV2Workflow)(destinationType, event, tags_1.default.FEATURES.PROCESSOR);
                // We are not passing destination handler for CDK flows
                return postTransformation_1.default.handleProcessorTransformSucessEvents(event, transformedPayloads, undefined);
            }
            catch (error) {
                const metaTO = this.getTags(destinationType, event.metadata.destinationId, event.metadata.workspaceId, tags_1.default.FEATURES.PROCESSOR);
                metaTO.metadata = event.metadata;
                const erroredResp = postTransformation_1.default.handleProcessorTransformFailureEvents(error, metaTO);
                return [erroredResp];
            }
        }));
        return respList.flat();
    }
    async doRouterTransformation(events, destinationType, _version, _requestMetadata) {
        const allDestEvents = (0, groupBy_1.default)(events, (ev) => ev.destination?.ID);
        const response = await Promise.all(Object.values(allDestEvents).map(async (destInputArray) => {
            const metaTO = this.getTags(destinationType, destInputArray[0].metadata.destinationId, destInputArray[0].metadata.workspaceId, tags_1.default.FEATURES.ROUTER);
            try {
                const doRouterTransformationResponse = await (0, handler_1.processCdkV2Workflow)(destinationType, destInputArray, tags_1.default.FEATURES.ROUTER);
                return postTransformation_1.default.handleRouterTransformSuccessEvents(doRouterTransformationResponse, undefined, metaTO);
            }
            catch (error) {
                metaTO.metadatas = destInputArray.map((input) => {
                    return input.metadata;
                });
                const erroredResp = postTransformation_1.default.handleRouterTransformFailureEvents(error, metaTO);
                return [erroredResp];
            }
        }));
        return response.flat();
    }
    doBatchTransformation(_events, _destinationType, _version, _requestMetadata) {
        throw new errorTypes_1.TransformationError('CDKV2 Does not Implement Batch Transform Routine');
    }
    deliver(_event, _destinationType, _requestMetadata) {
        throw new errorTypes_1.TransformationError('CDKV2 Does not Implement Delivery Routine');
    }
    processUserDeletion(requests, rudderDestInfo) {
        throw new errorTypes_1.TransformationError('CDKV2 Does not Implement Deletion Routine');
    }
}
exports.default = CDKV2DestinationService;
//# sourceMappingURL=cdkV2Integration.js.map
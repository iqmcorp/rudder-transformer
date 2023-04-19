"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rudder_transformer_cdk_1 = require("rudder-transformer-cdk");
const errorTypes_1 = require("../../v0/util/errorTypes");
const postTransformation_1 = __importDefault(require("./postTransformation"));
const tags_1 = __importDefault(require("../../v0/util/tags"));
const path_1 = __importDefault(require("path"));
class CDKV1DestinationService {
    init() {
        rudder_transformer_cdk_1.ConfigFactory.init({
            basePath: path_1.default.resolve(__dirname, '../../cdk/v1'),
            loggingMode: 'production',
        });
    }
    getName() {
        return 'CDK_V1';
    }
    getTags(destType, destinationId, workspaceId, feature) {
        const metaTO = {
            errorDetails: {
                destType: destType.toUpperCase(),
                module: tags_1.default.MODULES.DESTINATION,
                implementation: tags_1.default.IMPLEMENTATIONS.CDK_V1,
                feature,
                destinationId,
                workspaceId,
            },
            errorContext: '[CDKV1 Integration Service] Failure During Proc Transform',
        };
        return metaTO;
    }
    async doProcessorTransformation(events, destinationType, _version, _requestMetadata) {
        const tfConfig = await rudder_transformer_cdk_1.ConfigFactory.getConfig(destinationType);
        const respList = await Promise.all(events.map(async (event) => {
            try {
                let transformedPayloads = await rudder_transformer_cdk_1.Executor.execute(event, tfConfig);
                // We are not passing destinationHandler to post processor as we don't have post processing in CDK flows
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
    doRouterTransformation(_events, _destinationType, _version, _requestMetadata) {
        throw new errorTypes_1.TransformationError('CDKV1 Does not Implement Router Transform Routine');
    }
    doBatchTransformation(_events, _destinationType, _version, _requestMetadata) {
        throw new errorTypes_1.TransformationError('CDKV1 Does not Implement Batch Transform Routine');
    }
    deliver(_event, _destinationType, _requestMetadata) {
        throw new errorTypes_1.TransformationError('CDV1 Does not Implement Delivery Routine');
    }
    processUserDeletion(requests, rudderDestInfo) {
        throw new errorTypes_1.TransformationError('CDV1 Does not Implement Deletion Routine');
    }
}
exports.default = CDKV1DestinationService;
//# sourceMappingURL=cdkV1Integration.js.map
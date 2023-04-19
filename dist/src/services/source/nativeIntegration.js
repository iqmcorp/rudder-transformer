"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postTransformation_1 = __importDefault(require("./postTransformation"));
const fetchHandlers_1 = __importDefault(require("../../helpers/fetchHandlers"));
const tags_1 = __importDefault(require("../../v0/util/tags"));
class NativeIntegrationSourceService {
    getTags() {
        const metaTO = {
            errorDetails: {
                module: tags_1.default.MODULES.SOURCE,
                implementation: tags_1.default.IMPLEMENTATIONS.NATIVE,
                destinationId: 'Non determinable',
                workspaceId: 'Non determinable',
            },
            errorContext: '[Native Integration Service] Failure During Source Transform',
        };
        return metaTO;
    }
    async sourceTransformRoutine(sourceEvents, sourceType, version, _requestMetadata) {
        const sourceHandler = fetchHandlers_1.default.getSourceHandler(sourceType, version);
        const respList = await Promise.all(sourceEvents.map(async (sourceEvent) => {
            try {
                const respEvents = await sourceHandler.process(sourceEvent);
                return postTransformation_1.default.handleSuccessEventsSource(respEvents);
            }
            catch (error) {
                const metaTO = this.getTags();
                return postTransformation_1.default.handleFailureEventsSource(error, metaTO);
            }
        }));
        return respList;
    }
}
exports.default = NativeIntegrationSourceService;
//# sourceMappingURL=nativeIntegration.js.map
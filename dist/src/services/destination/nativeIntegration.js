"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groupBy_1 = __importDefault(require("lodash/groupBy"));
const postTransformation_1 = __importDefault(require("./postTransformation"));
const networkHandlerFactory_1 = __importDefault(require("../../adapters/networkHandlerFactory"));
const fetchHandlers_1 = __importDefault(require("../../helpers/fetchHandlers"));
const tags_1 = __importDefault(require("../../v0/util/tags"));
class NativeIntegrationDestinationService {
    init() { }
    getName() {
        return 'Native';
    }
    getTags(destType, destinationId, workspaceId, feature) {
        const metaTO = {
            errorDetails: {
                destType: destType.toUpperCase(),
                module: tags_1.default.MODULES.DESTINATION,
                implementation: tags_1.default.IMPLEMENTATIONS.NATIVE,
                feature,
                destinationId,
                workspaceId,
            },
            errorContext: '[Native Integration Service] Failure During Processor Transform',
        };
        return metaTO;
    }
    async doProcessorTransformation(events, destinationType, version, _requestMetadata) {
        const destHandler = fetchHandlers_1.default.getDestHandler(destinationType, version);
        const respList = await Promise.all(events.map(async (event) => {
            try {
                let transformedPayloads = await destHandler.process(event);
                return postTransformation_1.default.handleProcessorTransformSucessEvents(event, transformedPayloads, destHandler);
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
    async doRouterTransformation(events, destinationType, version, _requestMetadata) {
        const destHandler = fetchHandlers_1.default.getDestHandler(destinationType, version);
        const allDestEvents = (0, groupBy_1.default)(events, (ev) => ev.destination?.ID);
        const groupedEvents = Object.values(allDestEvents);
        const response = await Promise.all(groupedEvents.map(async (destInputArray) => {
            const metaTO = this.getTags(destinationType, destInputArray[0].metadata.destinationId, destInputArray[0].metadata.workspaceId, tags_1.default.FEATURES.ROUTER);
            try {
                const doRouterTransformationResponse = await destHandler.processRouterDest(destInputArray);
                return postTransformation_1.default.handleRouterTransformSuccessEvents(doRouterTransformationResponse, destHandler, metaTO);
            }
            catch (error) {
                metaTO.metadatas = destInputArray.map((input) => {
                    return input.metadata;
                });
                const errorResp = postTransformation_1.default.handleRouterTransformFailureEvents(error, metaTO);
                return [errorResp];
            }
        }));
        return response.flat();
    }
    doBatchTransformation(events, destinationType, version, _requestMetadata) {
        const destHandler = fetchHandlers_1.default.getDestHandler(destinationType, version);
        if (!destHandler.batch) {
            throw new Error(`${destinationType} does not implement batch`);
        }
        const allDestEvents = (0, groupBy_1.default)(events, (ev) => ev.destination?.ID);
        const groupedEvents = Object.values(allDestEvents);
        const response = groupedEvents.map((destEvents) => {
            try {
                const destBatchedRequests = destHandler.batch(destEvents);
                return destBatchedRequests;
            }
            catch (error) {
                const metaTO = this.getTags(destinationType, destEvents[0].metadata.destinationId, destEvents[0].metadata.workspaceId, tags_1.default.FEATURES.BATCH);
                metaTO.metadatas = events.map((event) => {
                    return event.metadata;
                });
                const errResp = postTransformation_1.default.handleBatchTransformFailureEvents(error, metaTO);
                return [errResp];
            }
        });
        return response.flat();
    }
    async deliver(destinationRequest, destinationType, _requestMetadata) {
        try {
            const networkHandler = networkHandlerFactory_1.default.getNetworkHandler(destinationType);
            const rawProxyResponse = await networkHandler.proxy(destinationRequest);
            const processedProxyResponse = networkHandler.processAxiosResponse(rawProxyResponse);
            return networkHandler.responseHandler({
                ...processedProxyResponse,
                rudderJobMetadata: destinationRequest.metadata,
            }, destinationType);
        }
        catch (err) {
            const metaTO = this.getTags(destinationType, destinationRequest.metadata?.destinationId || 'Non-determininable', destinationRequest.metadata?.workspaceId || 'Non-determininable', tags_1.default.FEATURES.DATA_DELIVERY);
            metaTO.metadata = destinationRequest.metadata;
            return postTransformation_1.default.handleDeliveryFailureEvents(err, metaTO);
        }
    }
    async processUserDeletion(requests, rudderDestInfo) {
        const response = await Promise.all(requests.map(async (request) => {
            const { destType } = request;
            const destUserDeletionHandler = fetchHandlers_1.default.getDeletionHandler(destType.toLowerCase(), 'v0');
            if (!destUserDeletionHandler || !destUserDeletionHandler.processDeleteUsers) {
                return {
                    statusCode: 404,
                    error: `${destType}: Doesn't support deletion of users`,
                };
            }
            try {
                const result = await destUserDeletionHandler.processDeleteUsers({
                    ...request,
                    rudderDestInfo,
                });
                return result;
            }
            catch (error) {
                const metaTO = this.getTags(destType, 'unknown', 'unknown', tags_1.default.FEATURES.USER_DELETION);
                return postTransformation_1.default.handleUserDeletionFailureEvents(error, metaTO);
            }
        }));
        return response;
    }
}
exports.default = NativeIntegrationDestinationService;
//# sourceMappingURL=nativeIntegration.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
const preTransformation_1 = __importDefault(require("../services/destination/preTransformation"));
const postTransformation_1 = __importDefault(require("../services/destination/postTransformation"));
const serviceSelector_1 = __importDefault(require("../helpers/serviceSelector"));
const util_1 = __importDefault(require("./util"));
const stats_1 = __importDefault(require("../util/stats"));
const logger_1 = __importDefault(require("../logger"));
const utils_1 = require("../util/utils");
const tags_1 = __importDefault(require("../v0/util/tags"));
const dynamicConfigParser_1 = require("../util/dynamicConfigParser");
class DestinationController {
    static async destinationTransformAtProcessor(ctx) {
        const startTime = new Date();
        logger_1.default.debug('Native(Process-Transform):: Requst to transformer::', JSON.stringify(ctx.request.body));
        let resplist;
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        let events = ctx.request.body;
        const metaTags = misc_1.default.getMetaTags(events[0].metadata);
        const { version, destination } = ctx.params;
        const integrationService = serviceSelector_1.default.getDestinationService(events);
        try {
            integrationService.init();
            events = preTransformation_1.default.preProcess(events, ctx);
            events = dynamicConfigParser_1.DynamicConfigParser.process(events);
            resplist = await integrationService.doProcessorTransformation(events, destination, version, requestMetadata);
        }
        catch (error) {
            resplist = events.map((ev) => {
                const metaTO = integrationService.getTags(destination, ev.metadata.destinationId, ev.metadata.workspaceId, tags_1.default.FEATURES.PROCESSOR);
                metaTO.metadata = ev.metadata;
                const errResp = postTransformation_1.default.handleProcessorTransformFailureEvents(error, metaTO);
                return errResp;
            });
        }
        ctx.body = resplist;
        util_1.default.postProcess(ctx);
        logger_1.default.debug('Native(Process-Transform):: Response from transformer::', JSON.stringify(ctx.body));
        stats_1.default.timing('dest_transform_request_latency', startTime, {
            destination,
            version,
            ...metaTags,
        });
        stats_1.default.increment('dest_transform_requests', {
            destination,
            version,
            ...metaTags,
        });
        return ctx;
    }
    static async destinationTransformAtRouter(ctx) {
        logger_1.default.debug('Native(Router-Transform):: Requst to transformer::', JSON.stringify(ctx.request.body));
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        const routerRequest = ctx.request.body;
        const destination = routerRequest.destType;
        let events = routerRequest.input;
        const integrationService = serviceSelector_1.default.getDestinationService(events);
        try {
            events = preTransformation_1.default.preProcess(events, ctx);
            events = dynamicConfigParser_1.DynamicConfigParser.process(events);
            const resplist = await integrationService.doRouterTransformation(events, destination, (0, utils_1.getIntegrationVersion)(), requestMetadata);
            ctx.body = { output: resplist };
        }
        catch (error) {
            const metaTO = integrationService.getTags(destination, events[0].metadata.destinationId, events[0].metadata.workspaceId, tags_1.default.FEATURES.ROUTER);
            metaTO.metadatas = events.map((ev) => {
                return ev.metadata;
            });
            const errResp = postTransformation_1.default.handleRouterTransformFailureEvents(error, metaTO);
            ctx.body = { output: [errResp] };
        }
        util_1.default.postProcess(ctx);
        logger_1.default.debug('Native(Router-Transform):: Response from transformer::', JSON.stringify(ctx.body));
        return ctx;
    }
    static batchProcess(ctx) {
        logger_1.default.debug('Native(Process-Transform-Batch):: Requst to transformer::', JSON.stringify(ctx.request.body));
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        const routerRequest = ctx.request.body;
        const destination = routerRequest.destType;
        let events = routerRequest.input;
        const integrationService = serviceSelector_1.default.getDestinationService(events);
        try {
            events = preTransformation_1.default.preProcess(events, ctx);
            const resplist = integrationService.doBatchTransformation(events, destination, (0, utils_1.getIntegrationVersion)(), requestMetadata);
            ctx.body = resplist;
        }
        catch (error) {
            const metaTO = integrationService.getTags(destination, events[0].metadata.destinationId, events[0].metadata.workspaceId, tags_1.default.FEATURES.BATCH);
            metaTO.metadatas = events.map((ev) => {
                return ev.metadata;
            });
            const errResp = postTransformation_1.default.handleBatchTransformFailureEvents(error, metaTO);
            ctx.body = [errResp];
        }
        util_1.default.postProcess(ctx);
        logger_1.default.debug('Native(Process-Transform-Batch):: Response from transformer::', JSON.stringify(ctx.body));
        return ctx;
    }
}
exports.default = DestinationController;
//# sourceMappingURL=destination.js.map
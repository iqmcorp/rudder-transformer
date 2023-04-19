"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
const serviceSelector_1 = __importDefault(require("../helpers/serviceSelector"));
const util_1 = __importDefault(require("./util"));
const logger_1 = __importDefault(require("../logger"));
const postTransformation_1 = __importDefault(require("../services/source/postTransformation"));
class SourceController {
    static async sourceTransform(ctx) {
        logger_1.default.debug('Native(Source-Transform):: Request to transformer::', JSON.stringify(ctx.request.body));
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        const events = ctx.request.body;
        const { version, source } = ctx.params;
        const integrationService = serviceSelector_1.default.getNativeSourceService();
        try {
            const resplist = await integrationService.sourceTransformRoutine(events, source, version, requestMetadata);
            ctx.body = resplist;
        }
        catch (err) {
            const metaTO = integrationService.getTags();
            const resp = postTransformation_1.default.handleFailureEventsSource(err, metaTO);
            ctx.body = [resp];
        }
        util_1.default.postProcess(ctx);
        logger_1.default.debug('Native(Source-Transform):: Response from transformer::', JSON.stringify(ctx.body));
        return ctx;
    }
}
exports.default = SourceController;
//# sourceMappingURL=source.js.map
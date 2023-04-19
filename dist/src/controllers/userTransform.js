"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
const userTransform_1 = __importDefault(require("../services/userTransform"));
const logger_1 = __importDefault(require("../logger"));
const customTransformer_1 = require("../util/customTransformer");
const util_1 = __importDefault(require("./util"));
class UserTransformController {
    static async transform(ctx) {
        logger_1.default.debug('(User transform - router:/customTransform ):: Request to transformer', JSON.stringify(ctx.request.body));
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        const events = ctx.request.body;
        const processedRespone = await userTransform_1.default.transformRoutine(events);
        ctx.body = processedRespone.transformedEvents;
        util_1.default.postProcess(ctx, processedRespone.retryStatus);
        logger_1.default.debug('(User transform - router:/customTransform ):: Response from transformer', JSON.stringify(ctx.response.body));
        return ctx;
    }
    static async testTransform(ctx) {
        logger_1.default.debug('(User transform - router:/transformation/test ):: Request to transformer', JSON.stringify(ctx.request.body));
        const { events, trRevCode, libraryVersionIDs = [] } = ctx.request.body;
        const response = await userTransform_1.default.testTransformRoutine(events, trRevCode, libraryVersionIDs);
        ctx.body = response.body;
        util_1.default.postProcess(ctx, response.status);
        logger_1.default.debug('(User transform - router:/transformation/test ):: Response from transformer', JSON.stringify(ctx.response.body));
        return ctx;
    }
    static async testTransformLibrary(ctx) {
        logger_1.default.debug('(User transform - router:/transformationLibrary/test ):: Request to transformer', JSON.stringify(ctx.request.body));
        try {
            const { code, language = 'javascript' } = ctx.request.body;
            if (!code) {
                throw new Error('Invalid request. Missing code');
            }
            const res = await (0, customTransformer_1.validateCode)(code, language);
            ctx.body = res;
        }
        catch (error) {
            ctx.body = { error: error.message };
            ctx.status = 400;
        }
        logger_1.default.debug('(User transform - router:/transformationLibrary/test ):: Response from transformer', JSON.stringify(ctx.response.body));
        return ctx;
    }
    static async testTransformSethandle(ctx) {
        logger_1.default.debug('(User transform - router:/transformation/sethandle ):: Request to transformer', JSON.stringify(ctx.request.body));
        try {
            const { trRevCode, libraryVersionIDs = [] } = ctx.request.body;
            const { code, language, testName, testWithPublish = false } = trRevCode || {};
            if (!code || !language || !testName) {
                throw new Error('Invalid Request. Missing parameters in transformation code block');
            }
            logger_1.default.debug(`[CT] Setting up a transformation ${testName} with publish: ${testWithPublish}`);
            if (!trRevCode.versionId) {
                trRevCode.versionId = 'testVersionId';
            }
            const res = await (0, customTransformer_1.setupUserTransformHandler)(trRevCode, libraryVersionIDs, testWithPublish);
            logger_1.default.debug(`[CT] Finished setting up transformation: ${testName}`);
            ctx.body = res;
        }
        catch (error) {
            ctx.status = 400;
            ctx.body = { error: error.message };
        }
        logger_1.default.debug('(User transform - router:/transformation/sethandle ):: Response from transformer', JSON.stringify(ctx.request.body));
        return ctx;
    }
    static async extractLibhandle(ctx) {
        logger_1.default.debug('(User transform - router:/extractLibs ):: Request to transformer', JSON.stringify(ctx.request.body));
        try {
            const { code, versionId, validateImports = false, additionalLibraries = [], language = 'javascript', testMode = false, } = ctx.request.body;
            if (!code) {
                throw new Error('Invalid request. Code is missing');
            }
            const obj = await (0, customTransformer_1.extractLibraries)(code, versionId, validateImports, additionalLibraries, language, testMode || versionId === 'testVersionId');
            ctx.body = obj;
        }
        catch (err) {
            ctx.status = 400;
            ctx.body = { error: err.error || err.message };
        }
        logger_1.default.debug('(User transform - router:/extractLibs ):: Response from transformer', JSON.stringify(ctx.request.body));
        return ctx;
    }
}
exports.default = UserTransformController;
//# sourceMappingURL=userTransform.js.map
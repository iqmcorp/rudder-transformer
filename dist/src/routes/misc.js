"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.miscRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const profile_1 = __importDefault(require("../controllers/profile"));
const misc_1 = __importDefault(require("../controllers/misc"));
const stats_1 = __importDefault(require("../util/stats"));
const logger_1 = __importDefault(require("../logger"));
const router = new router_1.default();
router.post('/heapdump', profile_1.default.profile);
router.get('/health', misc_1.default.healthStats);
router.get('/transformerBuildVersion', misc_1.default.buildVersion); // depriciating
router.get('/buildVersion', misc_1.default.buildVersion);
router.get('/version', misc_1.default.version);
router.get('/features', misc_1.default.features);
router.get('/metrics', async (ctx) => {
    try {
        await stats_1.default.metricsController(ctx);
    }
    catch (error) {
        logger_1.default.error(error);
        ctx.status = 400;
        ctx.body = error.message;
    }
});
exports.miscRoutes = router.routes();
//# sourceMappingURL=misc.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const http_graceful_shutdown_1 = __importDefault(require("http-graceful-shutdown"));
const logger_1 = __importDefault(require("./logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const cluster_1 = __importDefault(require("./util/cluster"));
const versionedRouter_1 = require("./versionedRouter");
const { RedisDB } = require('./util/redisConnector');
const testRouter_1 = require("./testRouter");
const metricsRouter_1 = require("./metricsRouter");
const middleware_1 = require("./middleware");
const utils_1 = require("./util/utils");
const routes_1 = require("./routes");
dotenv_1.default.config();
const clusterEnabled = process.env.CLUSTER_ENABLED !== 'false';
const useUpdatedRoutes = process.env.ENABLE_NEW_ROUTES !== 'false';
const port = parseInt(process.env.PORT || '9090', 10);
const metricsPort = parseInt(process.env.METRICS_PORT || '9091', 10);
const app = new koa_1.default();
(0, middleware_1.addStatMiddleware)(app);
const metricsApp = new koa_1.default();
(0, middleware_1.addStatMiddleware)(metricsApp);
metricsApp.use(metricsRouter_1.metricsRouter.routes()).use(metricsRouter_1.metricsRouter.allowedMethods());
app.use((0, koa_bodyparser_1.default)({
    jsonLimit: '200mb',
}));
if (useUpdatedRoutes) {
    logger_1.default.info('Using new routes');
    (0, routes_1.applicationRoutes)(app);
}
else {
    // To be depricated
    logger_1.default.info('Using old routes');
    app.use(versionedRouter_1.router.routes()).use(versionedRouter_1.router.allowedMethods());
    app.use(testRouter_1.testRouter.routes()).use(testRouter_1.testRouter.allowedMethods());
}
function finalFunction() {
    RedisDB.disconnect();
    logger_1.default.info('Redis client disconnected');
    logger_1.default.error(`Process (pid: ${process.pid}) was gracefully shutdown`);
    (0, utils_1.logProcessInfo)();
}
if (clusterEnabled) {
    cluster_1.default.start(port, app, metricsApp);
}
else {
    // HTTP server for exposing metrics
    if (process.env.STATS_CLIENT === 'prometheus') {
        metricsApp.listen(metricsPort);
    }
    const server = app.listen(port);
    process.on('SIGTERM', () => {
        logger_1.default.error(`SIGTERM signal received`);
    });
    process.on('SIGINT', () => {
        logger_1.default.error(`SIGINT signal received`);
    });
    process.on('SIGSEGV', () => {
        logger_1.default.error(`SIGSEGV - JavaScript memory error occurred`);
    });
    (0, http_graceful_shutdown_1.default)(server, {
        signals: 'SIGINT SIGTERM SIGSEGV',
        timeout: 30000,
        forceExit: true,
        finally: finalFunction,
    });
    logger_1.default.info(`App started. Listening on port: ${port}`);
}
exports.default = app;
//# sourceMappingURL=index.js.map
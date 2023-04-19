"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEventRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const eventTest_1 = __importDefault(require("../controllers/eventTest"));
const router = new router_1.default({ prefix: '/test-router' });
router.post('/:version/:destination', eventTest_1.default.testEvent);
router.get('/:version/health', eventTest_1.default.status);
exports.testEventRoutes = router.routes();
//# sourceMappingURL=testEvents.js.map
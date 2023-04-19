"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const routeActivation_1 = __importDefault(require("../middlewares/routeActivation"));
const source_1 = __importDefault(require("../controllers/source"));
const router = new router_1.default();
router.post('/:version/sources/:source', routeActivation_1.default.isSourceRouteActive, routeActivation_1.default.sourceFilter, source_1.default.sourceTransform);
exports.sourceRoutes = router.routes();
//# sourceMappingURL=source.js.map
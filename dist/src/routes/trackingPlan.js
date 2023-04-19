"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackingPlanRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const trackingPlan_1 = __importDefault(require("../controllers/trackingPlan"));
const router = new router_1.default();
router.post('/:version/validate', trackingPlan_1.default.validateTrackingPlan);
exports.trackingPlanRoutes = router.routes();
//# sourceMappingURL=trackingPlan.js.map
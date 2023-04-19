"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trackingPlan_1 = __importDefault(require("../services/trackingPlan"));
const util_1 = __importDefault(require("./util"));
class TrackingPlanController {
    static async validateTrackingPlan(ctx) {
        const events = ctx.request.body;
        const requestSize = ctx.request.get('content-length');
        const reqParams = ctx.request.query;
        const response = await trackingPlan_1.default.validateTrackingPlan(events, requestSize, reqParams);
        ctx.body = response.body;
        util_1.default.postProcess(ctx, response.status);
        return ctx;
    }
}
exports.default = TrackingPlanController;
//# sourceMappingURL=trackingPlan.js.map
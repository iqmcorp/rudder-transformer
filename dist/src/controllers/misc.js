"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
class MiscController {
    static healthStats(ctx) {
        ctx.body = misc_1.default.getHealthInfo();
        ctx.status = 200;
        return ctx;
    }
    static buildVersion(ctx) {
        ctx.body = misc_1.default.getBuildVersion();
        ctx.status = 200;
        return ctx;
    }
    static version(ctx) {
        ctx.body = misc_1.default.getVersion();
        ctx.status = 200;
        return ctx;
    }
    static features(ctx) {
        ctx.body = misc_1.default.getFetaures();
        ctx.status = 200;
        return ctx;
    }
}
exports.default = MiscController;
//# sourceMappingURL=misc.js.map
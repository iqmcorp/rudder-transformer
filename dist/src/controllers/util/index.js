"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../routes/utils/constants");
const util_1 = require("../../v0/util");
class ControllerUtility {
    static postProcess(ctx, status = 200) {
        ctx.set('apiVersion', constants_1.API_VERSION);
        ctx.status = status;
    }
    static deliveryPostProcess(ctx, status = 200) {
        ctx.set('apiVersion', constants_1.API_VERSION);
        ctx.status = (0, util_1.isHttpStatusSuccess)(status) ? 200 : status;
    }
}
exports.default = ControllerUtility;
//# sourceMappingURL=index.js.map
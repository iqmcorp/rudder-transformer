"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorNotifier_1 = require("../util/errorNotifier");
class ErrorReportingService {
    static reportError(error, context, errorResp) {
        errorNotifier_1.client.notify(error, context, {
            ...errorResp,
        });
    }
}
exports.default = ErrorReportingService;
//# sourceMappingURL=errorReporting.js.map
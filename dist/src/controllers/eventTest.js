"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventTester_1 = __importDefault(require("../services/eventTest/eventTester"));
class EventTestController {
    static async testEvent(ctx) {
        const { version, destination } = ctx.params;
        const { events } = ctx.request.body;
        try {
            const respList = await eventTester_1.default.testEvent(events, version, destination);
            ctx.body = respList;
        }
        catch (err) {
            // fail-safety error response
            ctx.body = {
                error: err.message || JSON.stringify(err),
            };
            ctx.status = 400;
        }
        ctx.set('apiVersion', this.API_VERSION);
    }
    static status(ctx) {
        ctx.status = 200;
        ctx.body = 'OK';
    }
}
EventTestController.API_VERSION = '1';
exports.default = EventTestController;
//# sourceMappingURL=eventTest.js.map
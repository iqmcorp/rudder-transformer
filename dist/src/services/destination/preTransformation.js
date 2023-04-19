"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PreTransformationDestinationService {
    static preProcess(events, ctx) {
        const reqParams = ctx.request.query;
        events = events.map((event) => {
            event.request = { query: reqParams };
            return event;
        });
        return events;
    }
}
exports.default = PreTransformationDestinationService;
//# sourceMappingURL=preTransformation.js.map
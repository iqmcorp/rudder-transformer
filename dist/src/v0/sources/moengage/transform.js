"use strict";
function process(events) {
    if (events.batch) {
        return events.batch;
    }
    return events;
}
exports.process = process;
//# sourceMappingURL=transform.js.map
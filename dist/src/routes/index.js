"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationRoutes = void 0;
const bulkUpload_1 = require("./bulkUpload");
const delivery_1 = require("./delivery");
const destination_1 = require("./destination");
const misc_1 = require("./misc");
const source_1 = require("./source");
const testEvents_1 = require("./testEvents");
const trackingPlan_1 = require("./trackingPlan");
const userTransform_1 = require("./userTransform");
function applicationRoutes(app) {
    app.use(bulkUpload_1.bulkUploadRoutes);
    app.use(delivery_1.proxyRoutes);
    app.use(destination_1.destinationRoutes);
    app.use(misc_1.miscRoutes);
    app.use(source_1.sourceRoutes);
    app.use(testEvents_1.testEventRoutes);
    app.use(trackingPlan_1.trackingPlanRoutes);
    app.use(userTransform_1.userTransformRoutes);
}
exports.applicationRoutes = applicationRoutes;
//# sourceMappingURL=index.js.map
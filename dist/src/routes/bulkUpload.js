"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUploadRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const bulkUpload_1 = require("../controllers/bulkUpload");
const router = new router_1.default();
router.post('/fileUpload', bulkUpload_1.fileUpload);
router.post('/pollStatus', bulkUpload_1.pollStatus);
router.post('/getFailedJobs', bulkUpload_1.getFailedJobStatus);
router.post('/getWarningJobs', bulkUpload_1.getWarnJobStatus);
exports.bulkUploadRoutes = router.routes();
//# sourceMappingURL=bulkUpload.js.map
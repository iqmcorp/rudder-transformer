"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTransformRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const routeActivation_1 = __importDefault(require("../middlewares/routeActivation"));
const userTransform_1 = __importDefault(require("../controllers/userTransform"));
const router = new router_1.default();
router.post('/customTransform', routeActivation_1.default.isUserTransformRouteActive, userTransform_1.default.transform);
router.post('/transformation/test', routeActivation_1.default.isUserTransformTestRouteActive, userTransform_1.default.testTransform);
router.post('/transformationLibrary/test', routeActivation_1.default.isUserTransformTestRouteActive, userTransform_1.default.testTransformLibrary);
router.post('/transformation/sethandle', routeActivation_1.default.isUserTransformTestRouteActive, userTransform_1.default.testTransformSethandle);
router.post('/extractLibs', routeActivation_1.default.isUserTransformRouteActive, userTransform_1.default.extractLibhandle);
exports.userTransformRoutes = router.routes();
//# sourceMappingURL=userTransform.js.map
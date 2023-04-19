"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinationRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const destination_1 = __importDefault(require("../controllers/destination"));
const regulation_1 = __importDefault(require("../controllers/regulation"));
const routeActivation_1 = __importDefault(require("../middlewares/routeActivation"));
const router = new router_1.default();
router.post('/:version/destinations/:destination', routeActivation_1.default.isDestinationRouteActive, routeActivation_1.default.destinationProcFilter, destination_1.default.destinationTransformAtProcessor);
router.post('/routerTransform', routeActivation_1.default.isDestinationRouteActive, routeActivation_1.default.destinationRtFilter, destination_1.default.destinationTransformAtRouter);
router.post('/batch', routeActivation_1.default.isDestinationRouteActive, routeActivation_1.default.destinationBatchFilter, destination_1.default.batchProcess);
router.post('/deleteUsers', regulation_1.default.deleteUsers);
exports.destinationRoutes = router.routes();
//# sourceMappingURL=destination.js.map
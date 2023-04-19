"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRoutes = void 0;
const router_1 = __importDefault(require("@koa/router"));
const delivery_1 = __importDefault(require("../controllers/delivery"));
const routeActivation_1 = __importDefault(require("../middlewares/routeActivation"));
const router = new router_1.default();
router.post('/:version/destinations/:destination/proxy', routeActivation_1.default.isDeliveryRouteActive, routeActivation_1.default.destinationDeliveryFilter, delivery_1.default.deliverToDestination);
router.post('/:version/destinations/:destination/proxyTest', routeActivation_1.default.isDeliveryTestRouteActive, delivery_1.default.testDestinationDelivery);
exports.proxyRoutes = router.routes();
//# sourceMappingURL=delivery.js.map
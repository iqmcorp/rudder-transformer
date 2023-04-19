"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transformerMode = process.env.TRANSFORMER_MODE;
const startDestTransformer = transformerMode === 'destination' || !transformerMode;
const startSourceTransformer = transformerMode === 'source' || !transformerMode;
const transformerDelivery = process.env.TRANSFORMER_DELIVERY || true;
const deliveryTestModeEnabled = process.env.TRANSFORMER_DELIVERY_TEST_ENABLED?.toLowerCase() === 'true' || false;
const transformerTestModeEnabled = process.env.TRANSFORMER_TEST_MODE
    ? process.env.TRANSFORMER_TEST_MODE.toLowerCase() === 'true'
    : false;
const areFunctionsEnabled = process.env.ENABLE_FUNCTIONS === 'false' ? false : true;
const destinationFilterList = process.env.DESTINATION_FILTER_LIST?.toLocaleLowerCase();
const sourceFilteList = process.env.SOURCE_FILTER_LIST?.toLocaleLowerCase();
const deliveryFilterList = process.env.DESTINATION_DELIVERY_FILTER_LIST?.toLocaleLowerCase();
class RouteActivationMiddleware {
    static executeActivationRule(ctx, next, shouldActivate) {
        if (shouldActivate) {
            return next();
        }
        else {
            ctx.status = 404;
            ctx.body = 'RouteActivationMiddleware route is disabled';
            return ctx;
        }
    }
    static shouldActivateRoute(integration, filterList) {
        if (!filterList) {
            return true;
        }
        return filterList ? !!filterList?.split(',').includes(integration.toLowerCase()) : true;
    }
    static isDestinationRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, startDestTransformer);
    }
    static isSourceRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, startSourceTransformer);
    }
    static isDeliveryRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, !!transformerDelivery);
    }
    static isDeliveryTestRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, deliveryTestModeEnabled);
    }
    static isUserTransformRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, areFunctionsEnabled);
    }
    static isUserTransformTestRouteActive(ctx, next) {
        return RouteActivationMiddleware.executeActivationRule(ctx, next, transformerTestModeEnabled);
    }
    static destinationProcFilter(ctx, next) {
        const { destination } = ctx.params;
        return RouteActivationMiddleware.executeActivationRule(ctx, next, RouteActivationMiddleware.shouldActivateRoute(destination, destinationFilterList));
    }
    static destinationRtFilter(ctx, next) {
        const routerRequest = ctx.request.body;
        const destination = routerRequest.destType;
        return RouteActivationMiddleware.executeActivationRule(ctx, next, RouteActivationMiddleware.shouldActivateRoute(destination, destinationFilterList));
    }
    static destinationBatchFilter(ctx, next) {
        const routerRequest = ctx.request.body;
        const destination = routerRequest.destType;
        return RouteActivationMiddleware.executeActivationRule(ctx, next, RouteActivationMiddleware.shouldActivateRoute(destination, destinationFilterList));
    }
    static sourceFilter(ctx, next) {
        const { source } = ctx.params;
        return RouteActivationMiddleware.executeActivationRule(ctx, next, RouteActivationMiddleware.shouldActivateRoute(source, sourceFilteList));
    }
    static destinationDeliveryFilter(ctx, next) {
        const { destination } = ctx.params;
        return RouteActivationMiddleware.executeActivationRule(ctx, next, RouteActivationMiddleware.shouldActivateRoute(destination, deliveryFilterList));
    }
}
exports.default = RouteActivationMiddleware;
//# sourceMappingURL=routeActivation.js.map
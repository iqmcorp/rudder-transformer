"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
const serviceSelector_1 = __importDefault(require("../helpers/serviceSelector"));
const deliveryTest_1 = __importDefault(require("../services/delivertTest/deliveryTest"));
const util_1 = __importDefault(require("./util"));
const logger_1 = __importDefault(require("../logger"));
const postTransformation_1 = __importDefault(require("../services/destination/postTransformation"));
const tags_1 = __importDefault(require("../v0/util/tags"));
class DeliveryController {
    static async deliverToDestination(ctx) {
        logger_1.default.debug('Native(Delivery):: Request to transformer::', JSON.stringify(ctx.request.body));
        let deliveryResponse;
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        let event = ctx.request.body;
        const { destination } = ctx.params;
        const integrationService = serviceSelector_1.default.getNativeDestinationService();
        try {
            deliveryResponse = await integrationService.deliver(event, destination, requestMetadata);
        }
        catch (error) {
            const metaTO = integrationService.getTags(destination, event.metadata?.destinationId || 'Non-determininable', event.metadata?.workspaceId || 'Non-determininable', tags_1.default.FEATURES.DATA_DELIVERY);
            metaTO.metadata = event.metadata;
            deliveryResponse = postTransformation_1.default.handleDeliveryFailureEvents(error, metaTO);
        }
        ctx.body = { output: deliveryResponse };
        util_1.default.deliveryPostProcess(ctx, deliveryResponse.status);
        logger_1.default.debug('Native(Delivery):: Response from transformer::', JSON.stringify(ctx.body));
        return ctx;
    }
    static async testDestinationDelivery(ctx) {
        logger_1.default.debug('Native(Delivery-Test):: Request to transformer::', JSON.stringify(ctx.request.body));
        const { destination } = ctx.params;
        const { deliveryPayload, destinationRequestPayload, } = ctx.request.body;
        const response = await deliveryTest_1.default.doTestDelivery(destination, destinationRequestPayload, deliveryPayload);
        ctx.body = { output: response };
        util_1.default.postProcess(ctx);
        logger_1.default.debug('Native(Delivery-Test):: Response from transformer::', JSON.stringify(ctx.body));
        return ctx;
    }
}
exports.default = DeliveryController;
//# sourceMappingURL=delivery.js.map
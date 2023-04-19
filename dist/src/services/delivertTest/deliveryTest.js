"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_json_1 = __importDefault(require("match-json"));
const json_diff_1 = __importDefault(require("json-diff"));
const networkHandlerFactory_1 = __importDefault(require("../../adapters/networkHandlerFactory"));
const network_1 = require("../../adapters/network");
const util_1 = require("../../v0/util");
const stats_1 = __importDefault(require("../../util/stats"));
const logger_1 = __importDefault(require("../../logger"));
const tags_1 = __importDefault(require("../../v0/util/tags"));
class DeliveryTestService {
    static async doTestDelivery(destination, routerDestReqPayload, routerDeliveryPayload) {
        let response;
        try {
            const destNetworkHandler = networkHandlerFactory_1.default.getNetworkHandler(destination);
            const proxyDestReqPayload = destNetworkHandler.prepareProxy(routerDeliveryPayload);
            response = {
                destinationRequestPayload: proxyDestReqPayload,
            };
            // Special handling required as Go and JavaScript encodes
            // URL parameters differently
            const { payloadFormat } = (0, network_1.getPayloadData)(routerDeliveryPayload.body);
            if (payloadFormat === 'FORM') {
                // This is to make sure we encode `~` in the data coming from the router.
                // The data coming from the router is already a query parameter string
                const routerDataVal = new URLSearchParams(routerDestReqPayload.data);
                routerDestReqPayload.data = routerDataVal;
                const proxyDataVal = new URLSearchParams();
                proxyDestReqPayload.data.forEach(function (value, key) {
                    const encodeAsterisk = (x) => x.replace(/\*/g, '%2A');
                    // Router encodes `*` as well
                    proxyDataVal.append(encodeAsterisk(key), encodeAsterisk(value));
                });
                proxyDestReqPayload.data = proxyDataVal;
            }
            // Compare the destination request payloads from router and proxy
            if (!(0, match_json_1.default)(routerDestReqPayload, proxyDestReqPayload)) {
                stats_1.default.counter('proxy_test_payload_mismatch', 1, {
                    destination,
                });
                logger_1.default.error(`[TransformerProxyTest] Destination request payload mismatch!`);
                logger_1.default.error(`[TransformerProxyTest] Delivery payload (router): ${JSON.stringify(routerDeliveryPayload)}`);
                logger_1.default.error(`[TransformerProxyTest] Destination request payload (router): ${JSON.stringify(routerDestReqPayload)}`);
                logger_1.default.error(`[TransformerProxyTest] Destination request payload (proxy): ${JSON.stringify(proxyDestReqPayload)} `);
                // Compute output difference
                const outputDiff = json_diff_1.default.diffString(routerDestReqPayload, proxyDestReqPayload);
                logger_1.default.error(`[TransformerProxyTest] Destination request payload difference: ${outputDiff}`);
                response = {
                    outputDiff,
                    ...response,
                };
            }
            else {
                stats_1.default.counter('proxy_test_payload_match', 1, {
                    destination,
                });
            }
        }
        catch (err) {
            stats_1.default.counter('proxy_test_error', 1, {
                destination,
            });
            response = (0, util_1.generateErrorObject)(err, {
                [tags_1.default.TAG_NAMES.DEST_TYPE]: destination.toUpperCase(),
                [tags_1.default.TAG_NAMES.MODULE]: tags_1.default.MODULES.DESTINATION,
                [tags_1.default.TAG_NAMES.FEATURE]: tags_1.default.FEATURES.DATA_DELIVERY,
            });
            response.message = `[TransformerProxyTest] Error occurred while testing proxy for destination ("${destination}"): "${err.message}"`;
            logger_1.default.error(response.message);
            logger_1.default.error(err);
            logger_1.default.error(`[TransformerProxyTest] Delivery payload (router): ${JSON.stringify(routerDeliveryPayload)}`);
            logger_1.default.error(`[TransformerProxyTest] Destination request payload (router): ${JSON.stringify(routerDestReqPayload)}`);
        }
        return response;
    }
}
exports.default = DeliveryTestService;
//# sourceMappingURL=deliveryTest.js.map
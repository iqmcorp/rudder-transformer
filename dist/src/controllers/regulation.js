"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const serviceSelector_1 = __importDefault(require("../helpers/serviceSelector"));
const tags_1 = __importDefault(require("../v0/util/tags"));
const postTransformation_1 = __importDefault(require("../services/destination/postTransformation"));
// TODO: refactor this class to new format
class RegulationController {
    static async deleteUsers(ctx) {
        logger_1.default.debug('Native(Process-Transform):: Requst to transformer::', JSON.stringify(ctx.request.body));
        let rudderDestInfo;
        try {
            const rudderDestInfoHeader = ctx.get('x-rudder-dest-info');
            const destInfoHeader = JSON.parse(rudderDestInfoHeader);
            if (!Array.isArray(destInfoHeader)) {
                rudderDestInfo = destInfoHeader;
            }
        }
        catch (error) {
            logger_1.default.error(`Error while getting rudderDestInfo header value: ${error}`);
        }
        const userDeletionRequests = ctx.request.body;
        const integrationService = serviceSelector_1.default.getNativeDestinationService();
        try {
            const resplist = await integrationService.processUserDeletion(userDeletionRequests, rudderDestInfo);
            ctx.body = resplist;
            ctx.status = resplist[0].statusCode;
        }
        catch (error) {
            const metaTO = integrationService.getTags(userDeletionRequests[0].destType, 'unknown', 'unknown', tags_1.default.FEATURES.USER_DELETION);
            const errResp = postTransformation_1.default.handleUserDeletionFailureEvents(error, metaTO);
            ctx.body = [{ error, statusCode: 500 }];
            ctx.status = 500;
        }
        return ctx;
    }
}
exports.default = RegulationController;
//# sourceMappingURL=regulation.js.map
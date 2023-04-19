"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
class FetchHandler {
    static getDestHandler(dest, version) {
        let destinationHandler;
        if (this.destHandlerMap.has(dest)) {
            destinationHandler = this.destHandlerMap.get(dest);
        }
        else {
            destinationHandler = misc_1.default.getDestHandler(dest, version);
            this.destHandlerMap.set(dest, destinationHandler);
        }
        return destinationHandler;
    }
    static getSourceHandler(source, version) {
        let sourceHandler;
        if (this.sourceHandlerMap.has(source)) {
            sourceHandler = this.sourceHandlerMap.get(source);
        }
        else {
            sourceHandler = misc_1.default.getSourceHandler(source, version);
            this.sourceHandlerMap.set(source, sourceHandler);
        }
        return sourceHandler;
    }
    static getDeletionHandler(dest, version) {
        let deletionHandler;
        if (this.deletionHandlerMap.has(dest)) {
            deletionHandler = this.deletionHandlerMap.get(dest);
        }
        else {
            deletionHandler = misc_1.default.getDeletionHandler(dest, version);
            this.deletionHandlerMap.set(dest, deletionHandler);
        }
        return deletionHandler;
    }
}
FetchHandler.sourceHandlerMap = new Map();
FetchHandler.destHandlerMap = new Map();
FetchHandler.deletionHandlerMap = new Map();
exports.default = FetchHandler;
//# sourceMappingURL=fetchHandlers.js.map
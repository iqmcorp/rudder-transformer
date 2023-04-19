"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const destinationCanonicalNames_1 = require("../constants/destinationCanonicalNames");
class MiscService {
    static getDestHandler(dest, version) {
        if (destinationCanonicalNames_1.DestHandlerMap.hasOwnProperty(dest)) {
            return require(`../${version}/destinations/${destinationCanonicalNames_1.DestHandlerMap[dest]}/transform`);
        }
        return require(`../${version}/destinations/${dest}/transform`);
    }
    static getSourceHandler(source, version) {
        return require(`../${version}/sources/${source}/transform`);
    }
    static getDeletionHandler(dest, version) {
        return require(`../${version}/destinations/${dest}/deleteUsers`);
    }
    static getRequestMetadata(ctx) {
        // TODO: Parse information such as
        // cluster, namespace, etc information
        // from the request
        return {
            namespace: 'Unknown',
            cluster: 'Unknown',
        };
    }
    static getMetaTags(metadata) {
        return {
            sourceType: metadata.sourceType,
            destinationType: metadata.destinationType,
            k8_namespace: metadata.namespace,
        };
    }
    static getHealthInfo() {
        const { git_commit_sha: gitCommitSha, transformer_build_version: imageVersion } = process.env;
        return {
            service: 'UP',
            ...(imageVersion && { version: imageVersion }),
            ...(gitCommitSha && { gitCommitSha }),
        };
    }
    static getBuildVersion() {
        return process.env.transformer_build_version || 'Version Info not found';
    }
    static getVersion() {
        return process.env.npm_package_version || 'Version Info not found';
    }
    static getFetaures() {
        const obj = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../../features.json'), 'utf8'));
        return JSON.stringify(obj);
    }
}
exports.default = MiscService;
//# sourceMappingURL=misc.js.map
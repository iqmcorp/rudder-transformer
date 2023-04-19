"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = __importDefault(require("../services/misc"));
const profile_1 = __importDefault(require("../services/profile"));
const util_1 = __importDefault(require("./util"));
class ProfileController {
    /**
     * Example usage of API
     *
     * Should have PutS3Object permission for the bucket mentioned
        curl --location --request POST 'http://localhost:9090/heapdump' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "sendTo": "aws",
            "accessKeyId": "<AWS_ACCESS_KEY>",
            "secretAccessKey": "<AWS_SECRET_ACCESS_KEY>",
            "bucket": "<S3_BUCKET_NAME>",
            "region": "<AWS_REGION>"
        }'
  
      * Another way -- To get the heapdump in v8 format
        curl --location --request POST 'http://localhost:9090/heapdump?format=v8' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "sendTo": "aws",
            "accessKeyId": "<AWS_ACCESS_KEY>",
            "secretAccessKey": "<AWS_SECRET_ACCESS_KEY>",
            "bucket": "<S3_BUCKET_NAME>",
            "region": "<AWS_REGION>"
        }'
    */
    static async profile(ctx) {
        let requestMetadata = misc_1.default.getRequestMetadata(ctx);
        const format = ctx.request.query.format;
        const { credBucketDetails } = ctx.request.body;
        const response = await profile_1.default.profile(credBucketDetails, format);
        const status = response.success ? 200 : 400;
        ctx.body = response.message;
        ctx.status = status;
        util_1.default.postProcess(ctx, status);
        return ctx;
    }
}
exports.default = ProfileController;
//# sourceMappingURL=profile.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lib_storage_1 = require("@aws-sdk/lib-storage");
const client_s3_1 = require("@aws-sdk/client-s3");
const moment_1 = __importDefault(require("moment"));
const v8_1 = __importDefault(require("v8"));
const pprof_1 = __importStar(require("pprof"));
const util_1 = require("util");
const logger_1 = __importDefault(require("../logger"));
// The average number of bytes between samples.
// 512*1024 = 524288
const intervalBytes = parseInt(process.env.PROF_INTERVAL_BYTES || '524288', 10);
// The maximum stack depth for samples collected.
const stackDepth = parseInt(process.env.PROF_STACK_DEPTH || '64', 10);
logger_1.default.info(`Stack Depth set: ${stackDepth}`);
logger_1.default.info(`Interval Bytes set: ${intervalBytes}`);
pprof_1.heap.start(intervalBytes, stackDepth);
class ProfileService {
    static async promisifiedRead(readable) {
        new Promise((resolve, reject) => {
            // Instructions for reading data
            const chunks = [];
            readable.on('readable', () => {
                let chunk;
                // Using while loop and calling
                // read method with parameter
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    // Displaying the chunk
                    chunk = readable.read();
                    if (chunk === null) {
                        break;
                    }
                    chunks.push(chunk);
                }
                resolve(Buffer.concat(chunks).toString());
            });
            readable.on('error', (err) => {
                logger_1.default.error(err);
                reject(err);
            });
        });
    }
    static async uploadToAWS(credBucketDetails, fileName, readStream) {
        const storageClient = new client_s3_1.S3Client({
            credentials: {
                accessKeyId: credBucketDetails.accessKeyId,
                secretAccessKey: credBucketDetails.secretAccessKey,
            },
            region: credBucketDetails.region,
        });
        const params = {
            Bucket: credBucketDetails.bucket,
            Key: fileName,
            Body: readStream,
        };
        const upload = new lib_storage_1.Upload({
            client: storageClient,
            params,
        });
        upload.on('httpUploadProgress', (progress) => {
            logger_1.default.info(progress);
        });
        const uploadResult = await upload.done();
        return uploadResult;
    }
    static async profile(credBucketDetails, format) {
        const writeFileProm = (0, util_1.promisify)(fs_1.default.writeFile);
        let snapshotReadableStream;
        try {
            const supportedCloudProvidersForDumpStorage = ['aws'];
            const shouldGenerateLocally = !credBucketDetails.sendTo;
            logger_1.default.info('Before Heapsnapshot converted into a readable stream');
            let fileName = '';
            let format = 'pb.gz';
            let profile;
            if (format && format === 'v8') {
                const readable = v8_1.default.getHeapSnapshot();
                snapshotReadableStream = await this.promisifiedRead(readable);
                format = 'heapsnapshot';
            }
            else {
                profile = pprof_1.heap.profile();
                snapshotReadableStream = await pprof_1.default.encode(profile);
            }
            logger_1.default.info('Heapsnapshot into a buffer');
            fileName = `heap_${moment_1.default.utc().format('YYYY-MM-DD_HH:mm:ss.sss')}.${format}`;
            let data;
            if (shouldGenerateLocally) {
                logger_1.default.info('Before pipeline');
                try {
                    await writeFileProm(fileName, snapshotReadableStream);
                }
                catch (error) {
                    logger_1.default.error('Error occurred:', error);
                    throw new Error(error);
                }
                logger_1.default.info('After pipeline');
            }
            else if (credBucketDetails.sendTo) {
                switch (credBucketDetails.sendTo) {
                    case 'aws':
                        data = await this.uploadToAWS(credBucketDetails, fileName, snapshotReadableStream);
                        break;
                    default:
                        throw new Error(`un-supported cloud provider, only these are supported currently(${supportedCloudProvidersForDumpStorage.join(', ')}) `);
                }
            }
            // snapshotReadableStream.destroy();
            logger_1.default.info('Success', data);
            return {
                success: true,
                message: `Generated ${credBucketDetails.sendTo ? credBucketDetails.sendTo : 'locally'} with filename: ${fileName}`,
            };
        }
        catch (error) {
            logger_1.default.error(error);
            return {
                success: false,
                message: error.message,
            };
        }
        finally {
            // if (snapshotReadableStream) {
            //   snapshotReadableStream.destroy();
            // }
        }
    }
}
exports.default = ProfileService;
//# sourceMappingURL=profile.js.map
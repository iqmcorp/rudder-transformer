"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicConfigParser = void 0;
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
/* eslint-disable no-param-reassign */
const get = require('get-value');
const unset = require('unset-value');
class DynamicConfigParser {
    static getDynamicConfigValue(event, value) {
        // this regex checks for pattern  "only spaces {{ path || defaultvalue }}  only spaces" .
        //  " {{message.traits.key  ||   \"email\" }} "
        //  " {{ message.traits.key || 1233 }} "
        const defFormat = /^\s*\{\{\s*(?<path>[a-zA-Z_]([a-zA-Z0-9_]*\.[a-zA-Z_][a-zA-Z0-9_]*)+)+\s*\|\|\s*(?<defaultVal>.*)\s*\}\}\s*$/;
        const matResult = value.match(defFormat);
        if (matResult) {
            // Support "event.<obj1>.<key>" alias for "message.<obj1>.<key>"
            const fieldPath = matResult.groups.path.replace(/^event\.(.*)$/, 'message.$1');
            const pathVal = get(event, fieldPath);
            if (pathVal) {
                value = pathVal;
                unset(event, fieldPath);
            }
            else {
                value = matResult.groups.defaultVal.replace(/"/g, '').trim();
            }
            return value;
        }
        /** var format2 = /<some other regex>/;
            matResult = value.match(format2);
            if (matResult) {
              <more logic here>
              return value
            } */
        return value;
    }
    static configureVal(value, event) {
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((key, index) => {
                    value[index] = this.configureVal(key, event);
                });
            }
            else if (typeof value === 'object') {
                Object.keys(value).forEach((obj) => {
                    value[obj] = this.configureVal(value[obj], event);
                });
            }
            else if (typeof value === 'string') {
                value = this.getDynamicConfigValue(event, value);
            }
        }
        return value;
    }
    static getDynamicConfig(event) {
        const resultantEvent = (0, cloneDeep_1.default)(event);
        const { Config } = event.destination;
        resultantEvent.destination.Config = this.configureVal(Config, event);
        return resultantEvent;
    }
    static process(events) {
        const eventRespArr = events.map((e) => {
            return this.getDynamicConfig(e);
        });
        return eventRespArr;
    }
}
exports.DynamicConfigParser = DynamicConfigParser;
//# sourceMappingURL=dynamicConfigParser.js.map
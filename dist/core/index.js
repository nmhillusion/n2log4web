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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogFactory = void 0;
const logger_1 = require("../logger");
const LoggerConfig_1 = require("../types/LoggerConfig");
const LogLevel_1 = require("../types/LogLevel");
__exportStar(require("../logger/index"), exports);
__exportStar(require("../types/index"), exports);
class LoggerBuilder {
    constructor(loggerConfig) {
        this.loggerConfig = loggerConfig;
    }
    getNodeLog(logName) {
        return new logger_1.NodeLogger(logName, this.loggerConfig);
    }
    getBrowserLog(logName) {
        return new logger_1.BrowserLogger(logName, this.loggerConfig);
    }
}
class LogFactory {
    static get loggerConfig() {
        return new LoggerConfig_1.LoggerConfig()
            .setFocusType("color")
            .setLoggableLevel(LogLevel_1.LOG_LEVELS.INFO);
    }
    static fromConfig(loggerConfig) {
        return new LoggerBuilder(loggerConfig);
    }
    static fromDefaultConfig() {
        return this.fromConfig(this.loggerConfig);
    }
    static getNodeLog(logName) {
        return this.fromDefaultConfig().getNodeLog(logName);
    }
    static getBrowserLog(logName) {
        return this.fromDefaultConfig().getBrowserLog(logName);
    }
}
exports.LogFactory = LogFactory;

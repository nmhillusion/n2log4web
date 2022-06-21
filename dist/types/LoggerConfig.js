"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerConfig = void 0;
const LogLevel_1 = require("./LogLevel");
class LoggerConfig {
    constructor() {
        this.loggableLevel_ = LogLevel_1.LOG_LEVELS.INFO;
        this.focusType_ = "color";
        this.colorConfigs_ = [];
        this.includingTimestamp_ = true;
    }
    setLoggableLevel(loggableLevel) {
        this.loggableLevel_ = loggableLevel;
        return this;
    }
    setFocusType(focusType) {
        this.focusType_ = focusType;
        return this;
    }
    setColorConfigs(colorConfigs) {
        this.colorConfigs_.push(...colorConfigs);
        return this;
    }
    setIncludingTimestamp(includingTimestamp) {
        this.includingTimestamp_ = includingTimestamp;
        return this;
    }
    get focusType() {
        return this.focusType_;
    }
    get loggableLevel() {
        return this.loggableLevel_;
    }
    isLoggable(logLevel) {
        return !this.loggableLevel.isGreaterThan(logLevel);
    }
    get colorConfigs() {
        return this.colorConfigs_;
    }
    get includingTimestamp() {
        return this.includingTimestamp_;
    }
    getColorOfLogLevel(logLevel) {
        const foundConfig = this.colorConfigs_.find((cfg) => cfg.logLevel.equals(logLevel));
        return foundConfig === null || foundConfig === void 0 ? void 0 : foundConfig.color;
    }
}
exports.LoggerConfig = LoggerConfig;

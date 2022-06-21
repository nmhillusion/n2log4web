"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_LEVELS = exports.LogLevel = void 0;
class LogLevel {
    constructor(levelValue, levelName) {
        this.levelValue = levelValue;
        this.levelName = levelName;
    }
    compare(other) {
        return this.levelValue - other.levelValue;
    }
    equals(other) {
        return 0 === this.compare(other);
    }
    isLessThan(other) {
        return 0 > this.compare(other);
    }
    isGreaterThan(other) {
        return 0 < this.compare(other);
    }
}
exports.LogLevel = LogLevel;
exports.LOG_LEVELS = {
    ERROR: new LogLevel(9, "ERROR"),
    WARN: new LogLevel(7, "WARN"),
    INFO: new LogLevel(5, "INFO"),
    DEBUG: new LogLevel(3, "DEBUG"),
};

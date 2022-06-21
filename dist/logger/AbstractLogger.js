"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLogger = void 0;
const LogLevel_1 = require("../types/LogLevel");
class AbstractLogger {
    constructor(logName, loggerConfig) {
        this.logName = logName;
        this.loggerConfig = loggerConfig;
    }
    fillColorConfig(colorConfigs, { logLevel, color, }) {
        const foundConfig = colorConfigs.find((cfg) => cfg.logLevel.equals(logLevel));
        if (!foundConfig) {
            colorConfigs.push({
                logLevel: logLevel,
                color: color,
            });
        }
    }
    setupColorConfigForLog(loggerConfig) {
        const { colorConfigs } = loggerConfig;
        this.fillColorConfig(colorConfigs, {
            logLevel: LogLevel_1.LOG_LEVELS.DEBUG,
            color: "#223333",
        });
        this.fillColorConfig(colorConfigs, {
            logLevel: LogLevel_1.LOG_LEVELS.INFO,
            color: "#008b8b",
        });
        this.fillColorConfig(colorConfigs, {
            logLevel: LogLevel_1.LOG_LEVELS.WARN,
            color: "#daa520",
        });
        this.fillColorConfig(colorConfigs, {
            logLevel: LogLevel_1.LOG_LEVELS.ERROR,
            color: "#ff1111",
        });
    }
    timestamp() {
        function fill2chars(input) {
            input = String(input);
            while (2 > input.length) {
                input = "0" + input;
            }
            return input;
        }
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate() + 1;
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const millis = date.getMilliseconds();
        return this.loggerConfig.includingTimestamp
            ? `${year}-${fill2chars(month)}-${fill2chars(day)} ` +
                `${fill2chars(hour)}:${fill2chars(minute)}:${fill2chars(second)}` +
                `.${fill2chars(millis)} -- `
            : "";
    }
    debug(...data) {
        this.doLog(LogLevel_1.LOG_LEVELS.DEBUG, ...data);
    }
    info(...data) {
        this.doLog(LogLevel_1.LOG_LEVELS.INFO, ...data);
    }
    warn(...data) {
        this.doLog(LogLevel_1.LOG_LEVELS.WARN, ...data);
    }
    error(...data) {
        this.doLog(LogLevel_1.LOG_LEVELS.ERROR, ...data);
    }
    setConfigFocusType(focusType) {
        this.loggerConfig.setFocusType(focusType);
        return this;
    }
    setConfigLoggableLevel(loggableLevel) {
        this.loggerConfig.setLoggableLevel(loggableLevel);
        return this;
    }
    addColorConfig({ logLevel, color, }) {
        const foundColorConfig = this.loggerConfig.colorConfigs.find((cfg) => cfg.logLevel.equals(logLevel));
        if (!foundColorConfig) {
            this.loggerConfig.colorConfigs.push({ logLevel, color });
        }
        else {
            foundColorConfig.color = color;
        }
        return this;
    }
}
exports.AbstractLogger = AbstractLogger;

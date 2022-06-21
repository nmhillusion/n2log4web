"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserLogger = void 0;
const AbstractLogger_1 = require("./AbstractLogger");
const chalk_1 = __importDefault(require("chalk"));
class BrowserLogger extends AbstractLogger_1.AbstractLogger {
    constructor(logName, loggerConfig) {
        super(logName, loggerConfig);
        this.setupColorConfigForLog(loggerConfig);
        this.chalk = chalk_1.default;
        this.chalk.level = 3;
    }
    doLog(logLevel, ...data) {
        if (this.loggerConfig.isLoggable(logLevel)) {
            const stylingLevelName = this.buildStyleOfLogLevel(logLevel);
            console.log(`${this.timestamp()}${this.buildLogNamePart()} -- [${stylingLevelName}]`, ...data);
        }
    }
    buildLogNamePart() {
        const logName = "string" == typeof this.logName ? this.logName : this.logName.name;
        return this.chalk.cyan(`[${logName}]`);
    }
    buildStyleOfLogLevel(logLevel) {
        const logColor = this.loggerConfig.getColorOfLogLevel(logLevel);
        const defaultPrimaryColor = "#ffffff";
        const defaultBackgroundColor = "#000000";
        let primaryColor = defaultPrimaryColor;
        let backgroundColor = defaultBackgroundColor;
        if (logColor) {
            if ("color" === this.loggerConfig.focusType) {
                primaryColor = logColor;
                backgroundColor = null;
            }
            else if ("background" === this.loggerConfig.focusType) {
                primaryColor = defaultPrimaryColor;
                backgroundColor = logColor;
            }
        }
        const combinedChalk = backgroundColor
            ? this.chalk.bgHex(backgroundColor).hex(primaryColor)
            : this.chalk.hex(primaryColor);
        return combinedChalk.bold(logLevel.levelName);
    }
}
exports.BrowserLogger = BrowserLogger;

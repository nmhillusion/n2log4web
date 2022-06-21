import { BrowserLogger, NodeLogger } from "../logger";
import { LoggerConfig } from "../types/LoggerConfig";
export * from "../logger/index";
export * from "../types/index";
declare class LoggerBuilder {
    private loggerConfig;
    constructor(loggerConfig: LoggerConfig);
    getNodeLog(logName: string | File): NodeLogger;
    getBrowserLog(logName: string | File): BrowserLogger;
}
export declare class LogFactory {
    private static get loggerConfig();
    static fromConfig(loggerConfig: LoggerConfig): LoggerBuilder;
    static fromDefaultConfig(): LoggerBuilder;
}

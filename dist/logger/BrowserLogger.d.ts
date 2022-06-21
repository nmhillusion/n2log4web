import { LoggerConfig } from "../types/LoggerConfig";
import { LogLevel } from "../types/LogLevel";
import { AbstractLogger } from "./AbstractLogger";
export declare class BrowserLogger extends AbstractLogger {
    private readonly chalk;
    constructor(logName: string | File, loggerConfig: LoggerConfig);
    protected doLog(logLevel: LogLevel, ...data: any[]): void;
    private buildLogNamePart;
    private buildStyleOfLogLevel;
}

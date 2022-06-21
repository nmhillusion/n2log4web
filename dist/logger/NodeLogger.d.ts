import { LoggerConfig, LogLevel } from "../types";
import { AbstractLogger } from "./AbstractLogger";
export declare class NodeLogger extends AbstractLogger {
    private chalk;
    constructor(logName: string | File, loggerConfig: LoggerConfig);
    protected doLog(logLevel: LogLevel, ...data: any[]): void;
    private buildLogNamePart;
    private buildStyleOfLogLevel;
}

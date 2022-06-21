import { LoggerConfig } from "../types/LoggerConfig";
import { LogLevel } from "../types/LogLevel";
import { ILogger } from "./ILogger";
export declare abstract class AbstractLogger implements ILogger {
    protected logName: string | File;
    protected loggerConfig: LoggerConfig;
    constructor(logName: string | File, loggerConfig: LoggerConfig);
    protected abstract doLog(logLevel: LogLevel, ...data: any[]): void;
    private fillColorConfig;
    protected setupColorConfigForLog(loggerConfig: LoggerConfig): void;
    protected timestamp(): string;
    debug(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
    error(...data: any[]): void;
    setConfigFocusType(focusType: "color" | "background"): AbstractLogger;
    setConfigLoggableLevel(loggableLevel: LogLevel): AbstractLogger;
    addColorConfig({ logLevel, color, }: {
        logLevel: LogLevel;
        color: string;
    }): AbstractLogger;
}

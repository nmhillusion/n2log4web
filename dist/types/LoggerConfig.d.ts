import { LogLevel } from "./LogLevel";
export declare class LoggerConfig {
    private loggableLevel_;
    private focusType_;
    private colorConfigs_;
    private includingTimestamp_;
    setLoggableLevel(loggableLevel: LogLevel): this;
    setFocusType(focusType: "color" | "background"): this;
    setColorConfigs(colorConfigs: {
        logLevel: LogLevel;
        color: string;
    }[]): this;
    setIncludingTimestamp(includingTimestamp: boolean): this;
    get focusType(): "color" | "background";
    get loggableLevel(): LogLevel;
    isLoggable(logLevel: LogLevel): boolean;
    get colorConfigs(): {
        logLevel: LogLevel;
        color: string;
    }[];
    get includingTimestamp(): boolean;
    getColorOfLogLevel(logLevel: LogLevel): string | undefined;
}

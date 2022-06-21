export declare class LogLevel {
    private levelValue;
    levelName: string;
    constructor(levelValue: number, levelName: string);
    compare(other: LogLevel): number;
    equals(other: LogLevel): boolean;
    isLessThan(other: LogLevel): boolean;
    isGreaterThan(other: LogLevel): boolean;
}
export declare const LOG_LEVELS: {
    ERROR: LogLevel;
    WARN: LogLevel;
    INFO: LogLevel;
    DEBUG: LogLevel;
};

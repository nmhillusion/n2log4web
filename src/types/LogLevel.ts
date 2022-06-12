export class LogLevel {
  constructor(private levelValue: number, public levelName: string) {}

  compare(other: LogLevel): number {
    return this.levelValue - other.levelValue;
  }

  equals(other: LogLevel): boolean {
    return 0 === this.compare(other);
  }

  isLessThan(other: LogLevel): boolean {
    return 0 > this.compare(other);
  }

  isGreaterThan(other: LogLevel): boolean {
    return 0 < this.compare(other);
  }
}

export const LOG_LEVELS = {
  ERROR: new LogLevel(9, "ERROR"),
  WARN: new LogLevel(7, "WARN"),
  INFO: new LogLevel(5, "INFO"),
  DEBUG: new LogLevel(3, "DEBUG"),
};

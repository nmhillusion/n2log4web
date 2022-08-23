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

  static ERROR = new LogLevel(9, "ERROR");
  static WARN = new LogLevel(7, "WARN");
  static INFO = new LogLevel(5, "INFO");
  static DEBUG = new LogLevel(3, "DEBUG");
}

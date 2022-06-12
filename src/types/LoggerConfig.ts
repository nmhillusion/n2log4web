import { LogLevel, LOG_LEVELS } from "./LogLevel";

export class LoggerConfig {
  private loggableLevel_: LogLevel = LOG_LEVELS.INFO;
  private focusType_: "color" | "background" = "color";
  private colorConfigs_: { logLevel: LogLevel; color: string }[] = [];

  setLoggableLevel(loggableLevel: LogLevel) {
    this.loggableLevel_ = loggableLevel;
    return this;
  }

  setFocusType(focusType: "color" | "background") {
    this.focusType_ = focusType;
    return this;
  }

  setColorConfigs(colorConfigs: { logLevel: LogLevel; color: string }[]) {
    this.colorConfigs_.push(...colorConfigs);
    return this;
  }

  get focusType(): "color" | "background" {
    return this.focusType_;
  }

  get loggableLevel(): LogLevel {
    return this.loggableLevel_;
  }

  isLoggable(logLevel: LogLevel): boolean {
    return !this.loggableLevel.isGreaterThan(logLevel);
  }

  get colorConfigs() {
    return this.colorConfigs_;
  }

  getColorOfLogLevel(logLevel: LogLevel): string | undefined {
    const foundConfig = this.colorConfigs_.find((cfg) =>
      cfg.logLevel.equals(logLevel)
    );
    return foundConfig?.color;
  }
}

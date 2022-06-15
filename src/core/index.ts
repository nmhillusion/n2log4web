import { BrowserLogger, NodeLogger } from "../logger";
import { LoggerConfig } from "../types/LoggerConfig";
import { LOG_LEVELS } from "../types/LogLevel";

export * from "../logger/index";
export * from "../types/index";

class LoggerBuilder {
  constructor(private loggerConfig: LoggerConfig) {}

  getNodeLog(logName: string | File): NodeLogger {
    return new NodeLogger(logName, this.loggerConfig);
  }

  getBrowserLog(logName: string | File): BrowserLogger {
    return new BrowserLogger(logName, this.loggerConfig);
  }
}

export class LogFactory {
  private static get loggerConfig() {
    return new LoggerConfig()
      .setFocusType("color")
      .setLoggableLevel(LOG_LEVELS.INFO);
  }

  static fromConfig(loggerConfig: LoggerConfig): LoggerBuilder {
    return new LoggerBuilder(loggerConfig);
  }

  static fromDefaultConfig(): LoggerBuilder {
    return this.fromConfig(this.loggerConfig);
  }
}

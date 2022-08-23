import { BrowserLogger, NodeLogger } from "../logger";
import { LoggerConfig } from "../types/LoggerConfig";
import { LogLevel } from "../types/LogLevel";

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
      .setLoggableLevel(LogLevel.INFO);
  }

  static fromConfig(loggerConfig: LoggerConfig): LoggerBuilder {
    return new LoggerBuilder(loggerConfig);
  }

  private static fromDefaultConfig(): LoggerBuilder {
    return this.fromConfig(this.loggerConfig);
  }

  static getNodeLog(logName: string | File): NodeLogger {
    return this.fromDefaultConfig().getNodeLog(logName);
  }

  static getBrowserLog(logName: string | File): BrowserLogger {
    return this.fromDefaultConfig().getBrowserLog(logName);
  }
}

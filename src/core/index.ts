import { BrowserLogger, NodeLogger } from "../logger";
import { LoggerConfig } from "../types/LoggerConfig";
import { LOG_LEVELS } from "../types/LogLevel";

export * from "../logger/index";
export * from "../types/index";

export class LogFactory {
  private static get loggerConfig() {
    return new LoggerConfig()
      .setFocusType("color")
      .setLoggableLevel(LOG_LEVELS.INFO);
  }

  static getNodeLog(logName: string | File): NodeLogger {
    return new NodeLogger(logName, this.loggerConfig);
  }

  static getBrowserLog(logName: string | File): BrowserLogger {
    return new BrowserLogger(logName, this.loggerConfig);
  }
}

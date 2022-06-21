import { LoggerConfig, LogLevel, LOG_LEVELS } from "../types";
import { AbstractLogger } from "./AbstractLogger";
import _chalk, { Chalk } from "chalk";

export class NodeLogger extends AbstractLogger {
  private chalk: Chalk;

  constructor(logName: string | File, loggerConfig: LoggerConfig) {
    super(logName, loggerConfig);
    this.chalk = _chalk;
    this.chalk.level = 3;

    this.setupColorConfigForLog(loggerConfig);
  }

  protected doLog(logLevel: LogLevel, ...data: any[]): void {
    if (this.loggerConfig.isLoggable(logLevel)) {
      const stylingLevelName = this.buildStyleOfLogLevel(logLevel);
      console.log(
        `${this.timestamp()}${this.buildLogNamePart()} -- [${stylingLevelName}]`,
        ...data
      );
    }
  }

  private buildLogNamePart() {
    const logName =
      "string" == typeof this.logName ? this.logName : this.logName.name;
    return this.chalk.cyan(`[${logName}]`);
  }

  private buildStyleOfLogLevel(logLevel: LogLevel): string {
    const logColor = this.loggerConfig.getColorOfLogLevel(logLevel);
    const defaultPrimaryColor = "#ffffff";
    const defaultBackgroundColor = "#000000";

    let primaryColor = defaultPrimaryColor;
    let backgroundColor: string | null = defaultBackgroundColor;

    if (logColor) {
      if ("color" === this.loggerConfig.focusType) {
        primaryColor = logColor;
        backgroundColor = null;
      } else if ("background" === this.loggerConfig.focusType) {
        primaryColor = defaultPrimaryColor;
        backgroundColor = logColor;
      }
    }

    const combinedChalk = backgroundColor
      ? this.chalk.bgHex(backgroundColor).hex(primaryColor)
      : this.chalk.hex(primaryColor);
    return combinedChalk.bold(logLevel.levelName);
  }
}

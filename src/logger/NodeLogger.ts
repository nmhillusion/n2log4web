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

  private fillColorConfig(
    colorConfigs: {
      logLevel: LogLevel;
      color: string;
    }[],
    {
      logLevel,
      color,
    }: {
      logLevel: LogLevel;
      color: string;
    }
  ) {
    const foundConfig = colorConfigs.find((cfg) =>
      cfg.logLevel.equals(logLevel)
    );

    if (!foundConfig) {
      colorConfigs.push({
        logLevel: logLevel,
        color: color,
      });
    }
  }

  private setupColorConfigForLog(loggerConfig: LoggerConfig) {
    const { colorConfigs } = loggerConfig;
    this.fillColorConfig(colorConfigs, {
      logLevel: LOG_LEVELS.DEBUG,
      color: "#223333",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LOG_LEVELS.INFO,
      color: "#008b8b",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LOG_LEVELS.WARN,
      color: "#daa520",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LOG_LEVELS.ERROR,
      color: "#ff1111",
    });
  }

  protected doLog(logLevel: LogLevel, ...data: any[]): void {
    if (this.loggerConfig.isLoggable(logLevel)) {
      const stylingLevelName = this.buildStyleOfLogLevel(logLevel);
      console.log(
        `${this.timestamp()} -- [${this.logName.toString()}] -- [${stylingLevelName}]`,
        ...data
      );
    }
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

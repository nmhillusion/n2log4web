import { LoggerConfig } from "../types/LoggerConfig";
import { LogLevel, LOG_LEVELS } from "../types/LogLevel";
import { AbstractLogger } from "./AbstractLogger";

export class BrowserLogger extends AbstractLogger {
  constructor(logName: string | File, loggerConfig: LoggerConfig) {
    super(logName, loggerConfig);
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
      console.log(
        `${this.timestamp()} -- [${this.logName.toString()}] -- %c[${
          logLevel.levelName
        }]`,
        this.buildStyleOfLogLevel(logLevel),
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
        backgroundColor = "transparent";
      } else if ("background" === this.loggerConfig.focusType) {
        primaryColor = defaultPrimaryColor;
        backgroundColor = logColor;
      }
    }

    return `color: ${primaryColor}; background-color: ${backgroundColor}`;
  }
}

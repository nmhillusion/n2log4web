import { LoggerConfig } from "../types/LoggerConfig";
import { LogLevel } from "../types/LogLevel";
import { ILogger } from "./ILogger";

export abstract class AbstractLogger implements ILogger {
  constructor(
    protected logName: string | File,
    protected loggerConfig: LoggerConfig
  ) {}

  protected abstract doLog(logLevel: LogLevel, ...data: any[]): void;

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

  protected setupColorConfigForLog(loggerConfig: LoggerConfig) {
    const { colorConfigs } = loggerConfig;
    this.fillColorConfig(colorConfigs, {
      logLevel: LogLevel.DEBUG,
      color: "#223333",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LogLevel.INFO,
      color: "#008b8b",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LogLevel.WARN,
      color: "#daa520",
    });
    this.fillColorConfig(colorConfigs, {
      logLevel: LogLevel.ERROR,
      color: "#ff1111",
    });
  }

  protected timestamp() {
    function fill2chars(input: string | number) {
      input = String(input);

      while (2 > input.length) {
        input = "0" + input;
      }
      return input;
    }

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millis = date.getMilliseconds();

    return this.loggerConfig.includingTimestamp
      ? `${year}-${fill2chars(month)}-${fill2chars(day)} ` +
          `${fill2chars(hour)}:${fill2chars(minute)}:${fill2chars(second)}` +
          `.${fill2chars(millis)} -- `
      : "";
  }

  debug(...data: any[]): void {
    this.doLog(LogLevel.DEBUG, ...data);
  }

  info(...data: any[]): void {
    this.doLog(LogLevel.INFO, ...data);
  }

  warn(...data: any[]): void {
    this.doLog(LogLevel.WARN, ...data);
  }

  error(...data: any[]): void {
    this.doLog(LogLevel.ERROR, ...data);
  }

  setConfigFocusType(focusType: "color" | "background"): AbstractLogger {
    this.loggerConfig.setFocusType(focusType);
    return this;
  }

  setConfigLoggableLevel(loggableLevel: LogLevel): AbstractLogger {
    this.loggerConfig.setLoggableLevel(loggableLevel);
    return this;
  }

  addColorConfig({
    logLevel,
    color,
  }: {
    logLevel: LogLevel;
    color: string;
  }): AbstractLogger {
    const foundColorConfig = this.loggerConfig.colorConfigs.find((cfg) =>
      cfg.logLevel.equals(logLevel)
    );
    if (!foundColorConfig) {
      this.loggerConfig.colorConfigs.push({ logLevel, color });
    } else {
      foundColorConfig.color = color;
    }
    return this;
  }
}

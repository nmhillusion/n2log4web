import { LogFactory, LoggerConfig, LogLevel } from "@nmhillusion/n2log4web";

const logger = LogFactory.fromConfig(
  new LoggerConfig().setFocusType("background").setLoggableLevel(LogLevel.DEBUG)
).getBrowserLog("BrowserLogger");

const loggerWithNoTimestamp = LogFactory.fromConfig(
  new LoggerConfig().setIncludingTimestamp(false)
).getBrowserLog("BrowserLogger");

function callFn(fn: (...params: any[]) => any) {
  return (..._params: any[]) => fn.apply(_params);
}

logger.debug("test debug", [6]);
logger.info("test info", 17);
logger.info("test info", callFn(String.prototype.toLowerCase)("JAVASCRIPT"));
logger.warn("test warn", String.prototype.toUpperCase.apply("hello"));
logger.error("test error", { date: new Date() });

loggerWithNoTimestamp.debug("test debug", [16]);
loggerWithNoTimestamp.info("test info", 7);
loggerWithNoTimestamp.info(
  "test info",
  callFn(String.prototype.toLowerCase)("Promise")
);
loggerWithNoTimestamp.warn(
  "test warn",
  String.prototype.toUpperCase.apply("hiiii")
);
loggerWithNoTimestamp.error("test error", { date: new Date().getFullYear() });

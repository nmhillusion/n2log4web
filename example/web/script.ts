import { LogFactory } from "n2log4web";

const logger = LogFactory.fromDefaultConfig().getBrowserLog("BrowserLogger");

function callFn(fn: (...params: any[]) => any) {
  return (..._params: any[]) => fn.apply(_params);
}

logger.debug("test debug", [6]);
logger.info("test info", 17);
logger.info("test info", callFn(String.prototype.toLowerCase)("JAVASCRIPT"));
logger.warn("test warn", String.prototype.toUpperCase.apply("hello"));
logger.error("test error", { date: new Date() });

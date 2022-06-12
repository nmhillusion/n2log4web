import { BrowserLogger, LoggerConfig, LOG_LEVELS } from "n2log4web";

const logger = new BrowserLogger(
  "TestLogger",
  new LoggerConfig()
    .setFocusType("background")
    .setLoggableLevel(LOG_LEVELS.DEBUG)
    .setColorConfigs([
      { logLevel: LOG_LEVELS.DEBUG, color: "darkgreen" },
      { logLevel: LOG_LEVELS.INFO, color: "darkcyan" },
      { logLevel: LOG_LEVELS.WARN, color: "orange" },
    ])
);

logger.debug("test debug", [6]);
logger.info("test info", 7);
logger.warn("test warn", "hello");
logger.error("test error", { date: new Date() });

import { LogFactory, LoggerConfig, LOG_LEVELS } from "../src/core/index";

test("test color", () => {
  const nodeLogger = LogFactory.fromConfig(
    new LoggerConfig()
      .setFocusType("color")
      .setLoggableLevel(LOG_LEVELS.DEBUG)
      .setColorConfigs([{ logLevel: LOG_LEVELS.INFO, color: "#800080" }])
  ).getNodeLog("n2logTester");
  expect(() => nodeLogger.debug("test logger - debug")).not.toThrow();
  expect(() => nodeLogger.info("test logger - info")).not.toThrow();
  expect(() => nodeLogger.warn("test logger - warn")).not.toThrow();
  expect(() => nodeLogger.error("test logger - error")).not.toThrow();
});

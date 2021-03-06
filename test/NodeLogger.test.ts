import { LogFactory, LoggerConfig, LOG_LEVELS } from "../src/core/index";

test("test color", () => {
  const nodeLogger = LogFactory.fromConfig(
    new LoggerConfig()
      .setFocusType("color")
      .setLoggableLevel(LOG_LEVELS.DEBUG)
      .setColorConfigs([{ logLevel: LOG_LEVELS.INFO, color: "#800080" }])
  ).getNodeLog("n2logTester");
  expect(() => nodeLogger.debug("test logger color - debug")).not.toThrow();
  expect(() => nodeLogger.info("test logger color - info")).not.toThrow();
  expect(() => nodeLogger.warn("test logger color - warn")).not.toThrow();
  expect(() => nodeLogger.error("test logger color - error")).not.toThrow();
});

test("test with no timestamp", () => {
  const nodeLogger = LogFactory.fromConfig(
    new LoggerConfig().setIncludingTimestamp(false)
  ).getNodeLog("n2logTester");
  expect(() => nodeLogger.debug("test logger timestamp - debug")).not.toThrow();
  expect(() => nodeLogger.info("test logger timestamp - info")).not.toThrow();
  expect(() => nodeLogger.warn("test logger timestamp - warn")).not.toThrow();
  expect(() => nodeLogger.error("test logger timestamp - error")).not.toThrow();
});

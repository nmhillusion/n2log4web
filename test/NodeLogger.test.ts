import { LogFactory, LoggerConfig, LogLevel } from "../src/core/index";

test("test simple log with setting default config", () => {
  LogFactory.setDefaultConfig(
    new LoggerConfig()
      .setLoggableLevel(LogLevel.DEBUG)
      .setFocusType("background")
  );

  const logger = LogFactory.getNodeLog(__filename);

  logger.info("[i1] simple log");
  logger.debug("[d1] simple log");
  logger.warn("[w1] simple log");
  logger.error("[e1] simple log");

  const logger2 = LogFactory.fromConfig(
    new LoggerConfig().setIncludingTimestamp(false)
  ).getNodeLog(__filename);

  logger2.info("[i2] simple log");
  logger2.debug("[d2] simple log");
  logger2.warn("[w2] simple log");
  logger2.error("[e2] simple log");
});

test("test color", () => {
  const nodeLogger = LogFactory.fromConfig(
    new LoggerConfig()
      .setFocusType("color")
      .setLoggableLevel(LogLevel.DEBUG)
      .setColorConfigs([{ logLevel: LogLevel.INFO, color: "#800080" }])
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

import { LogFactory, LoggerConfig, LOG_LEVELS } from "../src/core/index";

test("test color", () => {
  const nodeLogger = LogFactory.getNodeLog("n2logTester")
    .setConfigFocusType("color")
    .setConfigLoggableLevel(LOG_LEVELS.DEBUG)
    .addColorConfig({ logLevel: LOG_LEVELS.INFO, color: "#ffffff" });

  expect(() => nodeLogger.debug("test logger - debug")).not.toThrow();
  expect(() => nodeLogger.info("test logger - info")).not.toThrow();
  expect(() => nodeLogger.warn("test logger - warn")).not.toThrow();
  expect(() => nodeLogger.error("test logger - error")).not.toThrow();
});

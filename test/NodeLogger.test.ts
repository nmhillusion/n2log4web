import { LoggerConfig, LOG_LEVELS, NodeLogger } from "../src/core/index";

test("test color", () => {
  const nodeLogger = new NodeLogger(
    "TestNodeLogger",
    new LoggerConfig()
      .setFocusType("background")
      .setLoggableLevel(LOG_LEVELS.DEBUG)
  );

  expect(() => nodeLogger.debug("test logger - debug")).not.toThrow();
  expect(() => nodeLogger.info("test logger - info")).not.toThrow();
  expect(() => nodeLogger.warn("test logger - warn")).not.toThrow();
  expect(() => nodeLogger.error("test logger - error")).not.toThrow();
});

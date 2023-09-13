const pino = require("pino");

const logger = pino({
  level: process.env.NODE_ENV !== "development" ? "info" : "debug",
  transport: {
    target: "pino-pretty",
  },
});

module.exports = logger;

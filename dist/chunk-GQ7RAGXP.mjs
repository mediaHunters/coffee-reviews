import {
  BaseLogger
} from "./chunk-IA6SR652.mjs";
import {
  IS_DEVELOPMENT
} from "./chunk-KZ524EFB.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/ui/common/config/logger/WinstonLogger.ts
import { format as winstonFormat, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { inject, injectable } from "inversify";
var WinstonLogger = class extends BaseLogger {
  constructor(format, logger) {
    super(logger);
    this.format = format;
  }
  initialize() {
    const loggerConfig = {
      datePattern: "YYYY-MM-DD",
      dirname: "./logs",
      format: this.format,
      maxFiles: "14d",
      maxSize: "20m",
      zippedArchive: true
    };
    this.logger.add(
      new DailyRotateFile({
        filename: "cr-%DATE%.info.log",
        level: "info",
        ...loggerConfig
      })
    );
    if (IS_DEVELOPMENT) {
      this.logger.add(
        new transports.Console({
          format: winstonFormat.combine(winstonFormat.colorize(), this.format),
          handleExceptions: true,
          level: "debug"
        })
      );
    }
  }
  write(message) {
    this.logger.info(message);
  }
};
WinstonLogger = __decorateClass([
  injectable(),
  __decorateParam(0, inject(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT)),
  __decorateParam(1, inject(UI_APPLICATION_IDENTIFIERS.LOGGER))
], WinstonLogger);

export {
  WinstonLogger
};
//# sourceMappingURL=chunk-GQ7RAGXP.mjs.map
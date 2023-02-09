import {
  JWTAuthenticationHandler
} from "./chunk-PAHVYZ3D.mjs";
import {
  JWTTokenUtil
} from "./chunk-3RGEATHH.mjs";
import {
  ExpressApplication
} from "./chunk-3FQLLEIT.mjs";
import {
  WinstonLogger
} from "./chunk-EHMN7MLT.mjs";
import {
  LOG_LEVEL
} from "./chunk-LQ4FDPEO.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";

// src/dependency/common/ApplicationModule.ts
import { createLogger, format } from "winston";
import express from "express";
var ApplicationModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideExpress(bind);
    this.provideExpressRouter(bind);
    this.provideExpressApplication(bind);
    this.provideWinstonLogger(bind);
    this.provideLoggerFormat(bind);
    this.provideLogger(bind);
    this.provideJWTAuthenticationHandler(bind);
    this.provideJWTTokenUtil(bind);
  }
  provideExpress(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.EXPRESS
    ).toConstantValue(express());
  }
  provideExpressRouter(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER
    ).toConstantValue(
      express.Router({
        caseSensitive: false,
        mergeParams: false,
        strict: false
      })
    );
  }
  provideExpressApplication(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION).to(
      ExpressApplication
    );
  }
  provideWinstonLogger(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON).to(WinstonLogger);
  }
  provideLoggerFormat(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT).toConstantValue(
      format.combine(
        format.colorize({
          all: true
        }),
        format.label({
          label: "[LOGGER]"
        }),
        format.timestamp({
          format: "YY-MM-DD HH:MM:SS"
        }),
        format.printf(
          (info) => `${info.label} ${info.timestamp} [${info.level}] : ${info.message} `
        )
      )
    );
  }
  provideLogger(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.LOGGER).toConstantValue(
      createLogger({
        exitOnError: false,
        level: LOG_LEVEL
      })
    );
  }
  provideJWTTokenUtil(bind) {
    bind(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL).to(
      JWTTokenUtil
    );
  }
  provideJWTAuthenticationHandler(bind) {
    bind(
      UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER
    ).to(JWTAuthenticationHandler);
  }
};

export {
  ApplicationModule
};
//# sourceMappingURL=chunk-VZP4HHR3.mjs.map
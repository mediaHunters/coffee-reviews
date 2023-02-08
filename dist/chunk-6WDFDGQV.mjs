import {
  JWTAuthenticationHandler
} from "./chunk-MVOBFY53.mjs";
import {
  JWTTokenUtil
} from "./chunk-7TQWHZT4.mjs";
import {
  ExpressApplication
} from "./chunk-NGF5B4C7.mjs";
import {
  WinstonLogger
} from "./chunk-GQ7RAGXP.mjs";
import {
  LOG_LEVEL
} from "./chunk-KZ524EFB.mjs";
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
//# sourceMappingURL=chunk-6WDFDGQV.mjs.map
import { Format } from "logform";
import { createLogger, format, Logger } from "winston";
import express from "express";
import { interfaces } from "inversify";
import "ui/index";

import { BaseModule } from "dependency/BaseModule";

import { IApplication } from "ui/common/config/application/common/IApplication";
import { ExpressApplication } from "ui/common/config/application/express/ExpressApplication";
import { ILogger } from "ui/common/config/logger/ILogger";
import { WinstonLogger } from "ui/common/config/logger/WinstonLogger";
import { UI_APPLICATION_IDENTIFIERS } from "ui/UIModuleSymbols";
import { LOG_LEVEL } from "ui/common/config/consts/variables";
import { IAuthenticationHandler } from "ui/common/config/application/common/auth/IAuthenticationHandler";
import { JWTAuthenticationHandler } from "ui/common/config/application/express/auth/JWTAuthenticationHandler";
import { JWTTokenUtil } from "ui/common/config/application/common/auth/utils/JWTTokenUtil";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideExpress(bind);
    this.provideExpressRouter(bind);
    this.provideExpressApplication(bind);

    this.provideWinstonLogger(bind);
    this.provideLoggerFormat(bind);
    this.provideLogger(bind);

    this.provideJWTAuthenticationHandler(bind);
    this.provideJWTTokenUtil(bind);
  }

  private provideExpress(bind: interfaces.Bind): void {
    bind<express.Application>(
      UI_APPLICATION_IDENTIFIERS.EXPRESS
    ).toConstantValue(express());
  }

  private provideExpressRouter(bind: interfaces.Bind): void {
    bind<express.Router>(
      UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER
    ).toConstantValue(
      express.Router({
        caseSensitive: false,
        mergeParams: false,
        strict: false
      })
    );
  }

  private provideExpressApplication(bind: interfaces.Bind): void {
    bind<IApplication>(UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION).to(
      ExpressApplication
    );
  }

  private provideWinstonLogger(bind: interfaces.Bind): void {
    bind<ILogger>(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON).to(WinstonLogger);
  }

  private provideLoggerFormat(bind: interfaces.Bind): void {
    bind<Format>(UI_APPLICATION_IDENTIFIERS.LOGGER_FORMAT).toConstantValue(
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
          info =>
            `${info.label} ${info.timestamp} [${info.level}] : ${info.message} `
        )
      )
    );
  }

  private provideLogger(bind: interfaces.Bind): void {
    bind<Logger>(UI_APPLICATION_IDENTIFIERS.LOGGER).toConstantValue(
      createLogger({
        exitOnError: false,
        level: LOG_LEVEL
      })
    );
  }

  private provideJWTTokenUtil(bind: interfaces.Bind): void {
    bind<JWTTokenUtil>(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL).to(
      JWTTokenUtil
    );
  }

  private provideJWTAuthenticationHandler(bind: interfaces.Bind): void {
    bind<IAuthenticationHandler>(
      UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER
    ).to(JWTAuthenticationHandler);
  }
}

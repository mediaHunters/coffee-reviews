import { interfaces } from 'inversify';
import { BaseModule } from '../BaseModule.js';

declare class ApplicationModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideExpress;
    private provideExpressRouter;
    private provideExpressApplication;
    private provideWinstonLogger;
    private provideLoggerFormat;
    private provideLogger;
    private provideJWTTokenUtil;
    private provideJWTAuthenticationHandler;
}

export { ApplicationModule };

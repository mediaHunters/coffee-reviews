import express__default from 'express';
import { IApplication } from '../common/IApplication.js';
import { BaseApplication } from '../common/BaseApplication.js';
import { ILogger } from '../../logger/ILogger.js';

declare class ExpressApplication extends BaseApplication<express__default.Application> implements IApplication {
    private readonly logger;
    private readonly router;
    constructor(logger: ILogger, app: express__default.Application, router: express__default.Router);
    initialize(): void;
    initializeSecurity(): void;
    initializeBodyParsers(): void;
    initializeLogging(): void;
    initializeHandlers(): void;
    initializePlugins(): void;
    initializeExtensions(): void;
}

export { ExpressApplication };

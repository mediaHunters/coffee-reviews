import { Logger } from 'winston';
import { Format } from 'logform';
import { BaseLogger } from './BaseLogger.js';
import { ILogger } from './ILogger.js';

declare class WinstonLogger extends BaseLogger<Logger> implements ILogger {
    private readonly format;
    constructor(format: Format, logger: Logger);
    initialize(): void;
    write(message: string): void;
}

export { WinstonLogger };

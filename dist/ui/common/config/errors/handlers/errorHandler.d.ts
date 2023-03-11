import { Application } from 'express';

declare const errorHandler: (app: Application) => Application;

export { errorHandler };

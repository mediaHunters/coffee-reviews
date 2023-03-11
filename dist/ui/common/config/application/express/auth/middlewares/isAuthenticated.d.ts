import * as express from 'express';

declare const isAuthenticated: (config?: {
    role: string;
}) => (req: express.Request, _res: express.Response, next: express.NextFunction) => Promise<void>;

export { isAuthenticated };

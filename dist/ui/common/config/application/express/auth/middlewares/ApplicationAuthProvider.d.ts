import { interfaces } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express';

declare class ApplicationAuthProvider implements interfaces.AuthProvider {
    private readonly userService;
    private readonly jwtTokenUtil;
    getUser(req: Request, res: Response, next: NextFunction): Promise<interfaces.Principal>;
}

export { ApplicationAuthProvider };

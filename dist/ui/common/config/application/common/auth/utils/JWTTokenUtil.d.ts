import { IncomingHttpHeaders } from 'http';
import { Secret } from 'jsonwebtoken';
import { User } from '../../../../../models/User.js';

declare class JWTTokenUtil {
    private readonly AUTH_HEADER;
    private readonly SCHEME;
    private readonly MATCHER;
    generateToken(payload: User, secret: Secret, expiresIn: string | number, payloadKey?: string): string;
    decodeToken<R extends object | string | null>(token: string): R;
    getTokenFromHeaders(headers: IncomingHttpHeaders): any;
}

export { JWTTokenUtil };

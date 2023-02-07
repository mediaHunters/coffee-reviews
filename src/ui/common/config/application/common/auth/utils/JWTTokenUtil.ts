import { IncomingHttpHeaders } from 'http';

import jwt, { Secret } from 'jsonwebtoken';
import { injectable } from 'inversify';

import { APP_TOKEN_SECRET } from 'ui/common/config/consts/variables';
import { User } from 'ui/common/models/User';

@injectable()
export class JWTTokenUtil {
  private readonly AUTH_HEADER = 'authorization';

  private readonly SCHEME = 'bearer';

  private readonly MATCHER = /(\S+)\s+(\S+)/;

  generateToken(
    payload: User,
    secret: Secret,
    expiresIn: string | number,
    payloadKey?: string
  ): string {
    return jwt.sign(payloadKey ? { [payloadKey]: payload } : payload, secret, {
      expiresIn,
    });
  }

  decodeToken<R extends object | string | null>(token: string): R {
    try {
      return jwt.verify(token, APP_TOKEN_SECRET) as R;
    } catch {
      return null as R;
    }
  }

  getTokenFromHeaders(headers: IncomingHttpHeaders): any {
    const authHeader = headers[this.AUTH_HEADER];
    if (!authHeader) {
      return null;
    }
    const matches = authHeader.match(this.MATCHER);
    return matches && matches[2];
  }
}

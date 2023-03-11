import {
  APP_TOKEN_SECRET
} from "./chunk-LQ4FDPEO.mjs";
import {
  __decorateClass
} from "./chunk-IV6S7MV4.mjs";

// src/ui/common/config/application/common/auth/utils/JWTTokenUtil.ts
import jwt from "jsonwebtoken";
import { injectable } from "inversify";
var JWTTokenUtil = class {
  constructor() {
    this.AUTH_HEADER = "authorization";
    this.SCHEME = "bearer";
    this.MATCHER = /(\S+)\s+(\S+)/;
  }
  generateToken(payload, secret, expiresIn, payloadKey) {
    return jwt.sign(payloadKey ? { [payloadKey]: payload } : payload, secret, {
      expiresIn
    });
  }
  decodeToken(token) {
    try {
      return jwt.verify(token, APP_TOKEN_SECRET);
    } catch {
      return null;
    }
  }
  getTokenFromHeaders(headers) {
    const authHeader = headers[this.AUTH_HEADER];
    if (!authHeader) {
      return null;
    }
    const matches = authHeader.match(this.MATCHER);
    return matches && matches[2];
  }
};
JWTTokenUtil = __decorateClass([
  injectable()
], JWTTokenUtil);

export {
  JWTTokenUtil
};
//# sourceMappingURL=chunk-3RGEATHH.mjs.map
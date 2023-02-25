import {
  Principal
} from "./chunk-CVMDAOS2.mjs";
import {
  FetchUserQuery
} from "./chunk-5QFM736W.mjs";
import {
  User
} from "./chunk-LZES7EV6.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider.ts
import { inject, injectable } from "inversify";
var ApplicationAuthProvider = class {
  async getUser(req, res, next) {
    const token = this.jwtTokenUtil.getTokenFromHeaders(req.headers);
    if (!token) {
      return new Principal(void 0);
    }
    const tokenData = await this.jwtTokenUtil.decodeToken(token);
    if (!tokenData) {
      return new Principal(void 0);
    }
    const { user } = tokenData;
    try {
      const existingUser = await this.userService.fetchUser(
        new FetchUserQuery(user.id)
      );
      if (!existingUser) {
        return new Principal(void 0);
      }
      return new Principal(
        new User(user.id, user.nickname, user.email, user.role)
      );
    } catch (error) {
      next(error);
      return new Principal(void 0);
    }
  }
};
__name(ApplicationAuthProvider, "ApplicationAuthProvider");
__decorateClass([
  inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE)
], ApplicationAuthProvider.prototype, "userService", 2);
__decorateClass([
  inject(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)
], ApplicationAuthProvider.prototype, "jwtTokenUtil", 2);
ApplicationAuthProvider = __decorateClass([
  injectable()
], ApplicationAuthProvider);

export {
  ApplicationAuthProvider
};
//# sourceMappingURL=chunk-2FTXGC6R.mjs.map
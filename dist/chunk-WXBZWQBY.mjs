import {
  getCurrentUser
} from "./chunk-TNP5IJCJ.mjs";
import {
  UserInterfaceError
} from "./chunk-SROXNPPD.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
import { FORBIDDEN, getStatusText, UNAUTHORIZED } from "http-status-codes";
var isAuthenticated = /* @__PURE__ */ __name((config) => async (req, _res, next) => {
  const user = getCurrentUser(req);
  if (!user) {
    next(
      new UserInterfaceError(
        UNAUTHORIZED,
        getStatusText(UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  const isAuthenticatedUser = await user.isAuthenticated();
  if (!isAuthenticatedUser) {
    next(
      new UserInterfaceError(
        UNAUTHORIZED,
        getStatusText(UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  if (config) {
    const isInRole = await user.isInRole(config.role);
    if (!isInRole) {
      next(
        new UserInterfaceError(
          FORBIDDEN,
          getStatusText(FORBIDDEN).toUpperCase()
        )
      );
      return;
    }
  }
  next();
}, "isAuthenticated");

export {
  isAuthenticated
};
//# sourceMappingURL=chunk-WXBZWQBY.mjs.map
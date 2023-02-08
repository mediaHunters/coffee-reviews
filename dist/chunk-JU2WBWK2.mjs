import {
  getCurrentUser
} from "./chunk-OODWIYZF.mjs";
import {
  UserInterfaceError
} from "./chunk-XRVKF5DQ.mjs";

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
import { FORBIDDEN, getStatusText, UNAUTHORIZED } from "http-status-codes";
var isAuthenticated = (config) => async (req, _res, next) => {
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
};

export {
  isAuthenticated
};
//# sourceMappingURL=chunk-JU2WBWK2.mjs.map
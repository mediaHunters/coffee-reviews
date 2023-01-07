import { interfaces } from "inversify-express-utils";
import { Request } from "express";

import { Principal } from "ui/common/config/application/express/auth/models/Principal";

export const getCurrentUser = (request: Request): Principal => {
  const httpContext: interfaces.HttpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  // eslint-disable-next-line no-console
  return httpContext.user;
};

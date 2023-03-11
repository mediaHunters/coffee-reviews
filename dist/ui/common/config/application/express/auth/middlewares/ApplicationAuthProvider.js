"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider.ts
var ApplicationAuthProvider_exports = {};
__export(ApplicationAuthProvider_exports, {
  ApplicationAuthProvider: () => ApplicationAuthProvider
});
module.exports = __toCommonJS(ApplicationAuthProvider_exports);
var import_inversify = require("inversify");

// src/ui/common/models/User.ts
var User = class {
  constructor(id, nickname, email, role) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.role = role;
  }
};

// src/ui/UIModuleSymbols.ts
var UI_IDENTIFIERS = {
  UI_MAPPER: Symbol.for("UIMapper")
};
var UI_APPLICATION_IDENTIFIERS = {
  EXPRESS: Symbol.for("Express"),
  EXPRESS_ROUTER: Symbol.for("ExpressRouter"),
  EXPRESS_APPLICATION: Symbol.for("ExpressApplication"),
  INVERSIFY_APPLICATION: Symbol.for("InversifyExpressApplication"),
  JWT_TOKEN_UTIL: Symbol.for("JWTTokenUtil"),
  JWT_AUTHENTICATION_HANDLER: Symbol.for("JWTAuthenticationHandler"),
  LOGGER: Symbol.for("Logger"),
  LOGGER_FORMAT: Symbol.for("WinstonFormat"),
  LOGGER_WINSTON: Symbol.for("WinstonLogger")
};
var UI_MAPPINGS_IDENTIFIERS = {
  USER_UI: Symbol.for("UserUI")
};

// src/core/CoreModuleSymbols.ts
var DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for("UserService"),
  AUTHENTICATION_SERVICE: Symbol.for("AuthenticationService"),
  COFFEE_SERVICE: Symbol.for("CoffeeService"),
  REVIEW_SERVICE: Symbol.for("ReviewService")
};
var DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for("UserDomain"),
  ROLE_DOMAIN: Symbol.for("RoleDomain"),
  COFFEE_DOMAIN: Symbol.for("CoffeeDomain"),
  REVIEW_DOMAIN: Symbol.for("ReviewDomain")
};
var DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for("RoleRepository"),
  USER_REPOSITORY: Symbol.for("UserRepository"),
  COFFEE_REPOSITORY: Symbol.for("CoffeeRepository"),
  REVIEW_REPOSITORY: Symbol.for("ReviewRepository")
};
var DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for("UserUnitOfWork"),
  COFFEE_UNIT_OF_WORK: Symbol.for("CoffeeUnitOfWork")
};

// src/core/applicationServices/User/requests/query/FetchUserQuery.ts
var FetchUserQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/ui/common/config/application/express/auth/models/Principal.ts
var Principal = class {
  constructor(details) {
    this.details = details;
  }
  isAuthenticated() {
    return Promise.resolve(!!this.details);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isResourceOwner(resourceId) {
    return Promise.resolve(resourceId === true);
  }
  isInRole(role) {
    return Promise.resolve(role === this.details?.role);
  }
};

// src/ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider.ts
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
__decorateClass([
  (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE)
], ApplicationAuthProvider.prototype, "userService", 2);
__decorateClass([
  (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)
], ApplicationAuthProvider.prototype, "jwtTokenUtil", 2);
ApplicationAuthProvider = __decorateClass([
  (0, import_inversify.injectable)()
], ApplicationAuthProvider);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApplicationAuthProvider
});
//# sourceMappingURL=ApplicationAuthProvider.js.map
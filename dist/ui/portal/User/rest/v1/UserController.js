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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/ui/portal/User/rest/v1/UserController.ts
var UserController_exports = {};
__export(UserController_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(UserController_exports);
var import_http_status_codes2 = require("http-status-codes");
var import_inversify = require("inversify");
var import_inversify_express_utils = require("inversify-express-utils");

// src/core/applicationServices/User/requests/command/RemoveUserCommand.ts
var RemoveUserCommand = class {
  constructor(id) {
    this.id = id;
  }
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

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var import_http_status_codes = require("http-status-codes");

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getCurrentUser = (request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
};

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/ui/common/config/errors/UserInterfaceError.ts
var UserInterfaceError = class extends BaseError {
  constructor(status, code, message = "", name = "") {
    super(code, message, name);
    this.status = status;
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/ui/common/config/application/express/auth/middlewares/isAuthenticated.ts
var isAuthenticated = (config) => async (req, _res, next) => {
  const user = getCurrentUser(req);
  if (!user) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  const isAuthenticatedUser = await user.isAuthenticated();
  if (!isAuthenticatedUser) {
    next(
      new UserInterfaceError(
        import_http_status_codes.UNAUTHORIZED,
        (0, import_http_status_codes.getStatusText)(import_http_status_codes.UNAUTHORIZED).toUpperCase()
      )
    );
    return;
  }
  if (config) {
    const isInRole = await user.isInRole(config.role);
    if (!isInRole) {
      next(
        new UserInterfaceError(
          import_http_status_codes.FORBIDDEN,
          (0, import_http_status_codes.getStatusText)(import_http_status_codes.FORBIDDEN).toUpperCase()
        )
      );
      return;
    }
  }
  next();
};

// src/ui/portal/User/rest/v1/UserController.ts
var UserController = class extends import_inversify_express_utils.BaseHttpController {
  constructor(UserService) {
    super();
    this.UserService = UserService;
  }
  async get() {
    return this.json(import_http_status_codes2.OK);
  }
  async getCurrentUser(req) {
    const user = getCurrentUser(req);
    return this.json(user);
  }
  async Remove({ id }) {
    return this.UserService.removeUser(new RemoveUserCommand(id));
  }
};
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/")
], UserController.prototype, "get", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpGet)("/currentUser")
], UserController.prototype, "getCurrentUser", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/removeUser", isAuthenticated({ role: "MEMBER" /* MEMBER */ })),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], UserController.prototype, "Remove", 1);
UserController = __decorateClass([
  (0, import_inversify_express_utils.controller)("/v1/user"),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE))
], UserController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
//# sourceMappingURL=UserController.js.map
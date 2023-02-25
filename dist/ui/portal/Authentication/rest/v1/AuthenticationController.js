"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var AuthenticationController_exports = {};
__export(AuthenticationController_exports, {
  AuthenticationController: () => AuthenticationController
});
module.exports = __toCommonJS(AuthenticationController_exports);
var import_inversify_express_utils = require("inversify-express-utils");
var import_http_status_codes = require("http-status-codes");
var import_inversify = require("inversify");

// src/core/applicationServices/Authentication/requests/repository/command/SignUpCommand.ts
var SignUpCommand = class {
  constructor(nickname, email, password) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
};
__name(SignUpCommand, "SignUpCommand");

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

// src/core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.ts
var AuthenticationQuery = class {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};
__name(AuthenticationQuery, "AuthenticationQuery");

// src/ui/portal/Authentication/rest/v1/AuthenticationController.ts
var AuthenticationController = class extends import_inversify_express_utils.BaseHttpController {
  constructor(authenticationService, authenticationHandler, uiMapper) {
    super();
    this.authenticationService = authenticationService;
    this.authenticationHandler = authenticationHandler;
    this.uiMapper = uiMapper;
  }
  async create({ nickname, email, password }) {
    const user = await this.authenticationService.signUp(
      new SignUpCommand(nickname, email, password)
    );
    const createdUser = this.uiMapper.mapper.map(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      user
    );
    return this.json(createdUser, import_http_status_codes.OK);
  }
  async index({ email, password }) {
    const authentication = await this.authenticationHandler.authenticate(
      new AuthenticationQuery(email, password)
    );
    return this.json(authentication, import_http_status_codes.OK);
  }
};
__name(AuthenticationController, "AuthenticationController");
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/signup"),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], AuthenticationController.prototype, "create", 1);
__decorateClass([
  (0, import_inversify_express_utils.httpPost)("/"),
  __decorateParam(0, (0, import_inversify_express_utils.requestBody)())
], AuthenticationController.prototype, "index", 1);
AuthenticationController = __decorateClass([
  (0, import_inversify_express_utils.controller)("/v1/auth"),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
  __decorateParam(1, (0, import_inversify.inject)(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)),
  __decorateParam(2, (0, import_inversify.inject)(UI_IDENTIFIERS.UI_MAPPER))
], AuthenticationController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationController
});
//# sourceMappingURL=AuthenticationController.js.map
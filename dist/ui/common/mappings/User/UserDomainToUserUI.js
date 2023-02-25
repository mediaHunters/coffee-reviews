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

// src/ui/common/mappings/User/UserDomainToUserUI.ts
var UserDomainToUserUI_exports = {};
__export(UserDomainToUserUI_exports, {
  UserDomainToUserUI: () => UserDomainToUserUI
});
module.exports = __toCommonJS(UserDomainToUserUI_exports);

// src/core/domain/User/User.ts
var User = class {
  constructor(id, nickname, email, role, password, lastName, firstName) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.role = role;
    this.password = password;
    this.lastName = lastName;
    this.firstName = firstName;
  }
};
__name(User, "User");

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

// src/ui/common/mappings/User/UserDomainToUserUI.ts
var UserDomainToUserUI = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      User
    );
  }
}), "UserDomainToUserUI");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserDomainToUserUI
});
//# sourceMappingURL=UserDomainToUserUI.js.map
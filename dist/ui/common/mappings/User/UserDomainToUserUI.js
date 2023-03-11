"use strict";
<<<<<<< HEAD
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
var UserDomainToUserUI = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      User
    );
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserDomainToUserUI
});
//# sourceMappingURL=UserDomainToUserUI.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserDomainToUserUI", {
    enumerable: true,
    get: ()=>UserDomainToUserUI
});
const _user = require("../../../../core/domain/User/User");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _uimoduleSymbols = require("../../../UIModuleSymbols");
const UserDomainToUserUI = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _uimoduleSymbols.UI_MAPPINGS_IDENTIFIERS.USER_UI,
                source: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
            }, _user.User);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbWFwcGluZ3MvVXNlci9Vc2VyRG9tYWluVG9Vc2VyVUkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyJztcbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5cbmltcG9ydCB7IFVzZXIgYXMgVXNlclVJIH0gZnJvbSAndWkvY29tbW9uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IFVJX01BUFBJTkdTX0lERU5USUZJRVJTIH0gZnJvbSAndWkvVUlNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJEb21haW5Ub1VzZXJVSSA9ICgpOiBJTWFwcGluZyA9PiAoe1xuICBjb25maWd1cmVNYXBwaW5nKG1hcHBlcjogTWFwcGVyKTogdm9pZCB7XG4gICAgbWFwcGVyLmNyZWF0ZU1hcDxVc2VyLCBVc2VyVUk+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogVUlfTUFQUElOR1NfSURFTlRJRklFUlMuVVNFUl9VSSxcbiAgICAgICAgc291cmNlOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgIH0sXG4gICAgICBVc2VyXG4gICAgKTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIlVzZXJEb21haW5Ub1VzZXJVSSIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIlVJX01BUFBJTkdTX0lERU5USUZJRVJTIiwiVVNFUl9VSSIsInNvdXJjZSIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiVVNFUl9ET01BSU4iLCJVc2VyIl0sIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7YUFBQUE7O3NCQU5RO21DQUNzQjtpQ0FHSDtBQUVqQyxNQUFNQSxxQkFBcUIsSUFBaUIsQ0FBQTtRQUNqREMsa0JBQWlCQyxNQUFjLEVBQVE7WUFDckNBLE9BQU9DLFNBQVMsQ0FDZDtnQkFDRUMsYUFBYUMsd0NBQXVCLENBQUNDLE9BQU87Z0JBQzVDQyxRQUFRQyw2Q0FBMEIsQ0FBQ0MsV0FBVztZQUNoRCxHQUNBQyxVQUFJO1FBRVI7SUFDRixDQUFBIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

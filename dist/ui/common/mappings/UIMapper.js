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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/ui/common/mappings/UIMapper.ts
var UIMapper_exports = {};
__export(UIMapper_exports, {
  UIMapper: () => UIMapper
});
module.exports = __toCommonJS(UIMapper_exports);
var import_inversify = require("inversify");
var import_mapper = require("@wufe/mapper");

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

// src/ui/common/mappings/UIMapper.ts
var UIMapper = class {
  constructor() {
    this.mapper = new import_mapper.Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserDomainToUserUI().configureMapping(this.mapper);
  }
};
UIMapper = __decorateClass([
  (0, import_inversify.injectable)()
], UIMapper);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UIMapper
});
//# sourceMappingURL=UIMapper.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UIMapper", {
    enumerable: true,
    get: ()=>UIMapper
});
const _inversify = require("inversify");
const _mapper = require("@wufe/mapper");
const _userDomainToUserUI = require("./User/UserDomainToUserUI");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let UIMapper = class UIMapper {
    constructor(){
        this.mapper = new _mapper.Mapper().withConfiguration((configuration)=>configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true));
        this.initialize();
    }
    initialize() {
        (0, _userDomainToUserUI.UserDomainToUserUI)().configureMapping(this.mapper);
    }
};
UIMapper = __decorate([
    (0, _inversify.injectable)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], UIMapper);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbWFwcGluZ3MvVUlNYXBwZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgeyBNYXBwZXIgfSBmcm9tICdAd3VmZS9tYXBwZXInO1xuXG5pbXBvcnQgeyBVc2VyRG9tYWluVG9Vc2VyVUkgfSBmcm9tICd1aS9jb21tb24vbWFwcGluZ3MvVXNlci9Vc2VyRG9tYWluVG9Vc2VyVUknO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVUlNYXBwZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbWFwcGVyOiBNYXBwZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXBwZXIgPSBuZXcgTWFwcGVyKCkud2l0aENvbmZpZ3VyYXRpb24oKGNvbmZpZ3VyYXRpb24pID0+XG4gICAgICBjb25maWd1cmF0aW9uXG4gICAgICAgIC5zaG91bGRJZ25vcmVTb3VyY2VQcm9wZXJ0aWVzSWZOb3RJbkRlc3RpbmF0aW9uKHRydWUpXG4gICAgICAgIC5zaG91bGRBdXRvbWF0aWNhbGx5TWFwQXJyYXlzKHRydWUpXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIFVzZXJEb21haW5Ub1VzZXJVSSgpLmNvbmZpZ3VyZU1hcHBpbmcodGhpcy5tYXBwZXIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVUlNYXBwZXIiLCJjb25zdHJ1Y3RvciIsIm1hcHBlciIsIk1hcHBlciIsIndpdGhDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsInNob3VsZElnbm9yZVNvdXJjZVByb3BlcnRpZXNJZk5vdEluRGVzdGluYXRpb24iLCJzaG91bGRBdXRvbWF0aWNhbGx5TWFwQXJyYXlzIiwiaW5pdGlhbGl6ZSIsIlVzZXJEb21haW5Ub1VzZXJVSSIsImNvbmZpZ3VyZU1hcHBpbmciLCJpbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1hQTs7YUFBQUE7OzJCQU5jO3dCQUNKO29DQUVZOzs7Ozs7Ozs7O0lBR3RCQSxXQUFOO0lBR0xDLGFBQWM7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJQyxjQUFNLEdBQUdDLGlCQUFpQixDQUFDLENBQUNDLGdCQUM1Q0EsY0FDR0MsOENBQThDLENBQUMsSUFBSSxFQUNuREMsNEJBQTRCLENBQUMsSUFBSTtRQUd0QyxJQUFJLENBQUNDLFVBQVU7SUFDakI7SUFFUUEsYUFBbUI7UUFDekJDLElBQUFBLHNDQUFrQixJQUFHQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNSLE1BQU07SUFDbkQ7QUFDRjtBQWhCYUY7SUFEWlcsSUFBQUEscUJBQVU7OztHQUNFWCJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

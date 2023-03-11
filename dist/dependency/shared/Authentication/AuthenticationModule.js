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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/dependency/shared/Authentication/AuthenticationModule.ts
var AuthenticationModule_exports = {};
__export(AuthenticationModule_exports, {
  AuthenticationModule: () => AuthenticationModule
});
module.exports = __toCommonJS(AuthenticationModule_exports);

// src/dependency/BaseModule.ts
var import_inversify = require("inversify");
var BaseModule = class extends import_inversify.ContainerModule {
};

// src/core/applicationServices/Authentication/AuthenticationService.ts
var import_inversify2 = require("inversify");
var import_bcrypt = require("bcrypt");

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

// src/core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand.ts
var AddUserUnitOfWorkRepositoryCommand = class {
  constructor(email, password, nickname) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
  }
};

// src/core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery.ts
var FindUserByEmailRepositoryQuery = class {
  constructor(email) {
    this.email = email;
  }
};

// src/core/applicationServices/Authentication/AuthenticationService.ts
var AuthenticationService = class {
  constructor(userUnitOfWork, userRepository) {
    this.userUnitOfWork = userUnitOfWork;
    this.userRepository = userRepository;
  }
  signUp({ nickname, email, password }) {
    return this.userUnitOfWork.addUser(
      new AddUserUnitOfWorkRepositoryCommand(email, password, nickname)
    );
  }
  async verifyCredentials({
    email,
    password
  }) {
    const user = await this.userRepository.findUserByEmail(
      new FindUserByEmailRepositoryQuery(email)
    );
    if (!user || !await (0, import_bcrypt.compare)(password, user?.password || "")) {
      return void 0;
    }
    return user;
  }
};
AuthenticationService = __decorateClass([
  (0, import_inversify2.injectable)(),
  __decorateParam(0, (0, import_inversify2.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)),
  __decorateParam(1, (0, import_inversify2.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], AuthenticationService);

// src/dependency/shared/Authentication/AuthenticationModule.ts
var AuthenticationModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideAuthenticationService(bind);
  }
  provideAuthenticationService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE
    ).to(AuthenticationService);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationModule
});
//# sourceMappingURL=AuthenticationModule.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthenticationModule", {
    enumerable: true,
    get: ()=>AuthenticationModule
});
const _baseModule = require("../../BaseModule");
const _authenticationService = require("../../../core/applicationServices/Authentication/AuthenticationService");
const _coreModuleSymbols = require("../../../core/CoreModuleSymbols");
class AuthenticationModule extends _baseModule.BaseModule {
    constructor(){
        super((bind)=>{
            this.init(bind);
        });
    }
    init(bind) {
        this.provideAuthenticationService(bind);
    }
    provideAuthenticationService(bind) {
        bind(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE).to(_authenticationService.AuthenticationService);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZXBlbmRlbmN5L3NoYXJlZC9BdXRoZW50aWNhdGlvbi9BdXRoZW50aWNhdGlvbk1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgQmFzZU1vZHVsZSB9IGZyb20gJ2RlcGVuZGVuY3kvQmFzZU1vZHVsZSc7XG5cbmltcG9ydCB7IElBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vSUF1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vQXV0aGVudGljYXRpb25TZXJ2aWNlJztcblxuaW1wb3J0IHsgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlIGV4dGVuZHMgQmFzZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKChiaW5kOiBpbnRlcmZhY2VzLkJpbmQpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuaW5pdChiaW5kKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KGJpbmQ6IGludGVyZmFjZXMuQmluZCk6IHZvaWQge1xuICAgIHRoaXMucHJvdmlkZUF1dGhlbnRpY2F0aW9uU2VydmljZShiaW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZUF1dGhlbnRpY2F0aW9uU2VydmljZShiaW5kOiBpbnRlcmZhY2VzLkJpbmQpOiB2b2lkIHtcbiAgICBiaW5kPElBdXRoZW50aWNhdGlvblNlcnZpY2U+KFxuICAgICAgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMuQVVUSEVOVElDQVRJT05fU0VSVklDRVxuICAgICkudG8oQXV0aGVudGljYXRpb25TZXJ2aWNlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uTW9kdWxlIiwiQmFzZU1vZHVsZSIsImNvbnN0cnVjdG9yIiwiYmluZCIsImluaXQiLCJwcm92aWRlQXV0aGVudGljYXRpb25TZXJ2aWNlIiwiRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMiLCJBVVRIRU5USUNBVElPTl9TRVJWSUNFIiwidG8iLCJBdXRoZW50aWNhdGlvblNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU2FBOzthQUFBQTs7NEJBUGM7dUNBR1c7bUNBRWlCO0FBRWhELE1BQU1BLDZCQUE2QkMsc0JBQVU7SUFDbERDLGFBQWM7UUFDWixLQUFLLENBQUMsQ0FBQ0MsT0FBZ0M7WUFDckMsSUFBSSxDQUFDQyxJQUFJLENBQUNEO1FBQ1o7SUFDRjtJQUVPQyxLQUFLRCxJQUFxQixFQUFRO1FBQ3ZDLElBQUksQ0FBQ0UsNEJBQTRCLENBQUNGO0lBQ3BDO0lBRVFFLDZCQUE2QkYsSUFBcUIsRUFBUTtRQUNoRUEsS0FDRUcseURBQXNDLENBQUNDLHNCQUFzQixFQUM3REMsRUFBRSxDQUFDQyw0Q0FBcUI7SUFDNUI7QUFDRiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

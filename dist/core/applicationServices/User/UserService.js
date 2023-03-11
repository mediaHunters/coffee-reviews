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

// src/core/applicationServices/User/UserService.ts
var UserService_exports = {};
__export(UserService_exports, {
  UserService: () => UserService
});
module.exports = __toCommonJS(UserService_exports);
var import_inversify = require("inversify");

// src/core/domainServices/User/request/Repository/query/GetUserRepositoryQuery.ts
var GetUserRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery.ts
var GetUsersRepositoryQuery = class {
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

// src/core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand.ts
var DeleteUserUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/User/UserService.ts
var UserService = class {
  constructor(userRepository, userUnitOfWork) {
    this.userRepository = userRepository;
    this.userUnitOfWork = userUnitOfWork;
  }
  removeUser({ id }) {
    return this.userUnitOfWork.deleteUser(
      new DeleteUserUnitOfWorkRepositoryCommand(id)
    );
  }
  fetchUser({ id }) {
    return this.userRepository.getUser(new GetUserRepositoryQuery(id));
  }
  fetchUsers() {
    return this.userRepository.getUsers(new GetUsersRepositoryQuery());
  }
};
UserService = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK))
], UserService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserService
});
//# sourceMappingURL=UserService.js.map
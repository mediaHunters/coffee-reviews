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

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
var UserUnitOfWork_exports = {};
__export(UserUnitOfWork_exports, {
  UserUnitOfWork: () => UserUnitOfWork
});
module.exports = __toCommonJS(UserUnitOfWork_exports);
var import_inversify = require("inversify");

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

// src/core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery.ts
var FindRoleByNameRepositoryQuery = class {
  constructor(name) {
    this.name = name;
  }
};

// src/core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.ts
var AddUserRepositoryCommand = class {
  constructor(nickname, email, password, roleId) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }
};

// src/core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery.ts
var CheckIfUserAlreadyExistsRepositoryQuery = class {
  constructor(nickname, email) {
    this.nickname = nickname;
    this.email = email;
  }
};

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/infrastructure/common/errors/InfrastructureErrors.ts
var InfrastructureErrors = /* @__PURE__ */ ((InfrastructureErrors2) => {
  InfrastructureErrors2[InfrastructureErrors2["USER_NOT_FOUND"] = 0] = "USER_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["USER_ALREADY_EXIST"] = 1] = "USER_ALREADY_EXIST";
  InfrastructureErrors2[InfrastructureErrors2["ROLE_NOT_FOUND"] = 2] = "ROLE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["COFFEE_NOT_FOUND"] = 3] = "COFFEE_NOT_FOUND";
  InfrastructureErrors2[InfrastructureErrors2["REVIEW_NOT_FOUND"] = 4] = "REVIEW_NOT_FOUND";
  return InfrastructureErrors2;
})(InfrastructureErrors || {});

// src/infrastructure/database/repository/User/UserUnitOfWork.ts
var UserUnitOfWork = class {
  constructor(userRepository, roleRepository) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }
  async addUser({
    email,
    password,
    nickname
  }) {
    const checkIfUserExist = await this.userRepository.checkIfUserAlreadyExists(
      new CheckIfUserAlreadyExistsRepositoryQuery(nickname, email)
    );
    if (checkIfUserExist.length > 0) {
      throw new BaseError(
        InfrastructureErrors[1 /* USER_ALREADY_EXIST */]
      );
    }
    const { id } = await this.roleRepository.findRoleByName(
      new FindRoleByNameRepositoryQuery("ADMIN" /* ADMIN */)
    );
    return this.userRepository.addUser(
      new AddUserRepositoryCommand(nickname, email, password, id)
    );
  }
  deleteUser(command) {
    return this.userRepository.removeUser(command);
  }
};
UserUnitOfWork = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY))
], UserUnitOfWork);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserUnitOfWork
});
//# sourceMappingURL=UserUnitOfWork.js.map
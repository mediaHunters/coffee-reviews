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

// src/infrastructure/database/repository/Coffee/CoffeeUnitOfWork.ts
var CoffeeUnitOfWork_exports = {};
__export(CoffeeUnitOfWork_exports, {
  CoffeeUnitOfWork: () => CoffeeUnitOfWork
});
module.exports = __toCommonJS(CoffeeUnitOfWork_exports);
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

// src/core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand.ts
var DeleteCoffeeRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};
__name(DeleteCoffeeRepositoryCommand, "DeleteCoffeeRepositoryCommand");

// src/core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.ts
var CreateCoffeeRepositoryCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.reflink = reflink;
    this.CoffeeStatus = CoffeeStatus;
  }
};
__name(CreateCoffeeRepositoryCommand, "CreateCoffeeRepositoryCommand");

// src/infrastructure/database/repository/Coffee/CoffeeUnitOfWork.ts
var CoffeeUnitOfWork = class {
  constructor(coffeeRepository, userRepository) {
    this.coffeeRepository = coffeeRepository;
    this.userRepository = userRepository;
  }
  create({
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
    CoffeeStatus
  }) {
    return this.coffeeRepository.createCoffee(
      new CreateCoffeeRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        reflink,
        CoffeeStatus
      )
    );
  }
  delete({ id }) {
    return this.coffeeRepository.deleteCoffee(
      new DeleteCoffeeRepositoryCommand(id)
    );
  }
  // @Transactional({
  //   connectionName: () => process.env.ORM_CONNECTION,
  // })
  // async addCoffeeReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddReviewRepositoryCommand): Promise<Coffee> {
  //   return this.coffeeRepository.addCoffeeReview(
  //     new AddReviewRepositoryCommand(userId, coffeeId, look, smell, taste)
  //   );
  // }
};
__name(CoffeeUnitOfWork, "CoffeeUnitOfWork");
CoffeeUnitOfWork = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY))
], CoffeeUnitOfWork);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeUnitOfWork
});
//# sourceMappingURL=CoffeeUnitOfWork.js.map
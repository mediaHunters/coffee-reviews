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

// src/core/applicationServices/Coffee/CoffeeService.ts
var CoffeeService_exports = {};
__export(CoffeeService_exports, {
  CoffeeService: () => CoffeeService
});
module.exports = __toCommonJS(CoffeeService_exports);
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

// src/core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.ts
var CreateCoffeeUnitOfWorkRepositoryCommand = class {
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

// src/core/domainServices/Coffee/requests/UnitOfWork/command/DeleteCoffeeUnitOfWorkRepositoryCommand.ts
var DeleteCoffeeUnitOfWorkRepositoryCommand = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.ts
var FindOneCoffeeRepositoryQuery = class {
  constructor(id) {
    this.id = id;
  }
};

// src/core/applicationServices/Coffee/CoffeeService.ts
var CoffeeService = class {
  constructor(coffeUnitOfWork, coffeRepository) {
    this.coffeUnitOfWork = coffeUnitOfWork;
    this.coffeRepository = coffeRepository;
  }
  findAll() {
    return this.coffeRepository.findAllCoffees();
  }
  findOne({ id }) {
    return this.coffeRepository.findOneCoffee(
      new FindOneCoffeeRepositoryQuery(id)
    );
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
    return this.coffeRepository.createCoffee(
      new CreateCoffeeUnitOfWorkRepositoryCommand(
        brand,
        name,
        type,
        imgUrl,
        description,
        burntLvl,
        CoffeeStatus,
        reflink || ""
      )
    );
  }
  update({ coffee, coffeeId }) {
    return this.coffeRepository.updateCoffee({ coffee, coffeeId });
  }
  delete(command) {
    return this.coffeUnitOfWork.delete(
      new DeleteCoffeeUnitOfWorkRepositoryCommand(command.id)
    );
  }
  // addReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddCoffeeReviewCommand): Promise<Coffee> {
  //   return this.CoffeUnitOfWork.addCoffeeReview(
  //     new AddCoffeeReviewUnitOfWorkRepositoryCommand(
  //       userId,
  //       coffeeId,
  //       look,
  //       smell,
  //       taste
  //     )
  //   );
  // }
  // sortAndPaginate({ sortBy, skip, take }: SearchQuery): Promise<Coffee> {
  //   return this.CoffeRepository.sortAndPaginate(
  //     new SearchRepositoryQuery(sortBy, skip, take)
  //   );
  // }
};
CoffeeService = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK)),
  __decorateParam(1, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY))
], CoffeeService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeService
});
//# sourceMappingURL=CoffeeService.js.map
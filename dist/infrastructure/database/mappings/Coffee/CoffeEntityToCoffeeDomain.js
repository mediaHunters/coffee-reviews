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

// src/infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain.ts
var CoffeEntityToCoffeeDomain_exports = {};
__export(CoffeEntityToCoffeeDomain_exports, {
  CoffeeEntityToCoffeeDomain: () => CoffeeEntityToCoffeeDomain
});
module.exports = __toCommonJS(CoffeEntityToCoffeeDomain_exports);

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

// src/core/domain/Coffee/Coffee.ts
var Coffee = class {
  constructor(id, brand, name, type, imgUrl, description, burntLvl, createdAt, reviews, reflink) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.createdAt = createdAt;
    this.reviews = reviews;
    this.reflink = reflink;
  }
};
__name(Coffee, "Coffee");

// src/infrastructure/InfrastructureModuleSymbols.ts
var DATABASE_IDENTIFIERS = {
  ORM: Symbol.for("Orm")
};
var INFRASTRUCTURE_IDENTIFIERS = {
  DB_MAPPER: Symbol.for("DBMapper")
};
var DATABASE_MAPPING_IDENTIFIERS = {
  USER_ENTITY: Symbol.for("UserEntity"),
  ROLE_ENTITY: Symbol.for("RoleEntity"),
  COFFEE_ENTITY: Symbol.for("CoffeeEntity"),
  REVIEW_ENTITY: Symbol.for("ReviewEntity")
};

// src/infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain.ts
var CoffeeEntityToCoffeeDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      Coffee
    );
  }
}), "CoffeeEntityToCoffeeDomain");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeEntityToCoffeeDomain
});
//# sourceMappingURL=CoffeEntityToCoffeeDomain.js.map
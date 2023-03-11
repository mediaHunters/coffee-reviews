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

// src/infrastructure/database/mappings/Review/ReviewEntityToReviewDomain.ts
var ReviewEntityToReviewDomain_exports = {};
__export(ReviewEntityToReviewDomain_exports, {
  ReviewEntityToReviewDomain: () => ReviewEntityToReviewDomain
});
module.exports = __toCommonJS(ReviewEntityToReviewDomain_exports);

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

// src/core/domain/Review/Review.ts
var Review = class {
  constructor(id, look, smell, taste, rating, coffeeId, userId) {
    this.id = id;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
    this.rating = rating;
    this.coffeeId = coffeeId;
    this.userId = userId;
  }
};

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

// src/infrastructure/database/mappings/Review/ReviewEntityToReviewDomain.ts
var ReviewEntityToReviewDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      Review
    );
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReviewEntityToReviewDomain
});
//# sourceMappingURL=ReviewEntityToReviewDomain.js.map
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
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReviewEntityToReviewDomain", {
    enumerable: true,
    get: ()=>ReviewEntityToReviewDomain
});
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _review = require("../../../../core/domain/Review/Review");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const ReviewEntityToReviewDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
            }, _review.Review);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9SZXZpZXcvUmV2aWV3RW50aXR5VG9SZXZpZXdEb21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuaW1wb3J0IHsgRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJ2NvcmUvZG9tYWluL1Jldmlldy9SZXZpZXcnO1xuaW1wb3J0IHsgUmV2aWV3IGFzIFJldmlld0VudGl0eSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1Jldmlldyc7XG5pbXBvcnQgeyBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFJldmlld0VudGl0eVRvUmV2aWV3RG9tYWluID0gKCk6IElNYXBwaW5nID0+ICh7XG4gIGNvbmZpZ3VyZU1hcHBpbmcobWFwcGVyOiBNYXBwZXIpOiB2b2lkIHtcbiAgICBtYXBwZXIuY3JlYXRlTWFwPFJldmlld0VudGl0eSwgUmV2aWV3PihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLlJFVklFV19ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5SRVZJRVdfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIFJldmlld1xuICAgICk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJSZXZpZXdFbnRpdHlUb1Jldmlld0RvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiUkVWSUVXX0RPTUFJTiIsInNvdXJjZSIsIkRBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMiLCJSRVZJRVdfRU5USVRZIiwiUmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7YUFBQUE7O21DQUw4Qjt3QkFDcEI7NkNBRXNCO0FBRXRDLE1BQU1BLDZCQUE2QixJQUFpQixDQUFBO1FBQ3pEQyxrQkFBaUJDLE1BQWMsRUFBUTtZQUNyQ0EsT0FBT0MsU0FBUyxDQUNkO2dCQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsYUFBYTtnQkFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1lBQ3BELEdBQ0FDLGNBQU07UUFFVjtJQUNGLENBQUEifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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
var CoffeeEntityToCoffeeDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      Coffee
    );
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeEntityToCoffeeDomain
});
//# sourceMappingURL=CoffeEntityToCoffeeDomain.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeEntityToCoffeeDomain", {
    enumerable: true,
    get: ()=>CoffeeEntityToCoffeeDomain
});
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _coffee = require("../../../../core/domain/Coffee/Coffee");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const CoffeeEntityToCoffeeDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
            }, _coffee.Coffee);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Db2ZmZWUvQ29mZmVFbnRpdHlUb0NvZmZlZURvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBwZXIgfSBmcm9tICdAd3VmZS9tYXBwZXInO1xuXG5pbXBvcnQgeyBJTWFwcGluZyB9IGZyb20gJ2NvcmUvY29tbW9uL21hcHBlci9JTWFwcGluZyc7XG5cbmltcG9ydCB7IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBDb2ZmZWUgfSBmcm9tICdjb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlJztcblxuaW1wb3J0IHsgQ29mZmVlIGFzIENvZmZlZUVudGl0eSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL0NvZmZlZSc7XG5pbXBvcnQgeyBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IENvZmZlZUVudGl0eVRvQ29mZmVlRG9tYWluID0gKCk6IElNYXBwaW5nID0+ICh7XG4gIGNvbmZpZ3VyZU1hcHBpbmcobWFwcGVyOiBNYXBwZXIpOiB2b2lkIHtcbiAgICBtYXBwZXIuY3JlYXRlTWFwPENvZmZlZUVudGl0eSwgQ29mZmVlPihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLkNPRkZFRV9ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5DT0ZGRUVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIENvZmZlZVxuICAgICk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJDb2ZmZWVFbnRpdHlUb0NvZmZlZURvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiQ09GRkVFX0RPTUFJTiIsInNvdXJjZSIsIkRBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMiLCJDT0ZGRUVfRU5USVRZIiwiQ29mZmVlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7YUFBQUE7O21DQU44Qjt3QkFDcEI7NkNBR3NCO0FBRXRDLE1BQU1BLDZCQUE2QixJQUFpQixDQUFBO1FBQ3pEQyxrQkFBaUJDLE1BQWMsRUFBUTtZQUNyQ0EsT0FBT0MsU0FBUyxDQUNkO2dCQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsYUFBYTtnQkFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1lBQ3BELEdBQ0FDLGNBQU07UUFFVjtJQUNGLENBQUEifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

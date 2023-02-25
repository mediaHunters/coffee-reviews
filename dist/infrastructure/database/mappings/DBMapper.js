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

// src/infrastructure/database/mappings/DBMapper.ts
var DBMapper_exports = {};
__export(DBMapper_exports, {
  DBMapper: () => DBMapper
});
module.exports = __toCommonJS(DBMapper_exports);
var import_mapper = require("@wufe/mapper");
var import_inversify = require("inversify");

// src/core/domain/Role/Role.ts
var Role = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};
__name(Role, "Role");

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

// src/infrastructure/database/mappings/Role/RoleEntityToRoleDomain.ts
var RoleEntityToRoleDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      Role
    );
  }
}), "RoleEntityToRoleDomain");

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
__name(User, "User");

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      User
    ).forMember("role", (opt) => opt.mapFrom((src) => src.role.name));
  }
}), "UserEntityToUserDomain");

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
__name(Review, "Review");

// src/infrastructure/database/mappings/Review/ReviewEntityToReviewDomain.ts
var ReviewEntityToReviewDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
      },
      Review
    );
  }
}), "ReviewEntityToReviewDomain");

// src/infrastructure/database/mappings/DBMapper.ts
var DBMapper = class {
  constructor() {
    this.mapper = new import_mapper.Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserEntityToUserDomain().configureMapping(this.mapper);
    RoleEntityToRoleDomain().configureMapping(this.mapper);
    CoffeeEntityToCoffeeDomain().configureMapping(this.mapper);
    ReviewEntityToReviewDomain().configureMapping(this.mapper);
  }
};
__name(DBMapper, "DBMapper");
DBMapper = __decorateClass([
  (0, import_inversify.injectable)()
], DBMapper);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DBMapper
});
//# sourceMappingURL=DBMapper.js.map
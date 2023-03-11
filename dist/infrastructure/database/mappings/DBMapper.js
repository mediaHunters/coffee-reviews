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
var RoleEntityToRoleDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      Role
    );
  }
});

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

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      User
    ).forMember("role", (opt) => opt.mapFrom((src) => src.role.name));
  }
});

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
DBMapper = __decorateClass([
  (0, import_inversify.injectable)()
], DBMapper);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DBMapper
});
//# sourceMappingURL=DBMapper.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DBMapper", {
    enumerable: true,
    get: ()=>DBMapper
});
const _mapper = require("@wufe/mapper");
const _inversify = require("inversify");
const _roleEntityToRoleDomain = require("./Role/RoleEntityToRoleDomain");
const _userEntityToUserDomain = require("./User/UserEntityToUserDomain");
const _coffeEntityToCoffeeDomain = require("./Coffee/CoffeEntityToCoffeeDomain");
const _reviewEntityToReviewDomain = require("./Review/ReviewEntityToReviewDomain");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let DBMapper = class DBMapper {
    constructor(){
        this.mapper = new _mapper.Mapper().withConfiguration((configuration)=>configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true));
        this.initialize();
    }
    initialize() {
        (0, _userEntityToUserDomain.UserEntityToUserDomain)().configureMapping(this.mapper);
        (0, _roleEntityToRoleDomain.RoleEntityToRoleDomain)().configureMapping(this.mapper);
        (0, _coffeEntityToCoffeeDomain.CoffeeEntityToCoffeeDomain)().configureMapping(this.mapper);
        (0, _reviewEntityToReviewDomain.ReviewEntityToReviewDomain)().configureMapping(this.mapper);
    }
};
DBMapper = __decorate([
    (0, _inversify.injectable)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], DBMapper);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9EQk1hcHBlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBwZXIgfSBmcm9tICdAd3VmZS9tYXBwZXInO1xuaW1wb3J0IHsgSU1hcHBlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdAd3VmZS9tYXBwZXIvdHlwZXMvY29uZi9tYXBwZXIuY29uZmlndXJhdGlvbic7XG5cbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5pbXBvcnQgeyBSb2xlRW50aXR5VG9Sb2xlRG9tYWluIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvbWFwcGluZ3MvUm9sZS9Sb2xlRW50aXR5VG9Sb2xlRG9tYWluJztcbmltcG9ydCB7IFVzZXJFbnRpdHlUb1VzZXJEb21haW4gfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Vc2VyL1VzZXJFbnRpdHlUb1VzZXJEb21haW4nO1xuaW1wb3J0IHsgQ29mZmVlRW50aXR5VG9Db2ZmZWVEb21haW4gfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Db2ZmZWUvQ29mZmVFbnRpdHlUb0NvZmZlZURvbWFpbic7XG5pbXBvcnQgeyBSZXZpZXdFbnRpdHlUb1Jldmlld0RvbWFpbiB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL21hcHBpbmdzL1Jldmlldy9SZXZpZXdFbnRpdHlUb1Jldmlld0RvbWFpbic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEQk1hcHBlciB7XG4gIHB1YmxpYyByZWFkb25seSBtYXBwZXI6IE1hcHBlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hcHBlciA9IG5ldyBNYXBwZXIoKS53aXRoQ29uZmlndXJhdGlvbihcbiAgICAgIChjb25maWd1cmF0aW9uOiBJTWFwcGVyQ29uZmlndXJhdGlvbikgPT5cbiAgICAgICAgY29uZmlndXJhdGlvblxuICAgICAgICAgIC5zaG91bGRJZ25vcmVTb3VyY2VQcm9wZXJ0aWVzSWZOb3RJbkRlc3RpbmF0aW9uKHRydWUpXG4gICAgICAgICAgLnNob3VsZEF1dG9tYXRpY2FsbHlNYXBBcnJheXModHJ1ZSlcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgVXNlckVudGl0eVRvVXNlckRvbWFpbigpLmNvbmZpZ3VyZU1hcHBpbmcodGhpcy5tYXBwZXIpO1xuICAgIFJvbGVFbnRpdHlUb1JvbGVEb21haW4oKS5jb25maWd1cmVNYXBwaW5nKHRoaXMubWFwcGVyKTtcbiAgICBDb2ZmZWVFbnRpdHlUb0NvZmZlZURvbWFpbigpLmNvbmZpZ3VyZU1hcHBpbmcodGhpcy5tYXBwZXIpO1xuICAgIFJldmlld0VudGl0eVRvUmV2aWV3RG9tYWluKCkuY29uZmlndXJlTWFwcGluZyh0aGlzLm1hcHBlcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEQk1hcHBlciIsImNvbnN0cnVjdG9yIiwibWFwcGVyIiwiTWFwcGVyIiwid2l0aENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmF0aW9uIiwic2hvdWxkSWdub3JlU291cmNlUHJvcGVydGllc0lmTm90SW5EZXN0aW5hdGlvbiIsInNob3VsZEF1dG9tYXRpY2FsbHlNYXBBcnJheXMiLCJpbml0aWFsaXplIiwiVXNlckVudGl0eVRvVXNlckRvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJSb2xlRW50aXR5VG9Sb2xlRG9tYWluIiwiQ29mZmVlRW50aXR5VG9Db2ZmZWVEb21haW4iLCJSZXZpZXdFbnRpdHlUb1Jldmlld0RvbWFpbiIsImluamVjdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzthQUFBQTs7d0JBWFU7MkJBR0k7d0NBRVk7d0NBQ0E7MkNBQ0k7NENBQ0E7Ozs7Ozs7Ozs7SUFHOUJBLFdBQU47SUFHTEMsYUFBYztRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlDLGNBQU0sR0FBR0MsaUJBQWlCLENBQzFDLENBQUNDLGdCQUNDQSxjQUNHQyw4Q0FBOEMsQ0FBQyxJQUFJLEVBQ25EQyw0QkFBNEIsQ0FBQyxJQUFJO1FBR3hDLElBQUksQ0FBQ0MsVUFBVTtJQUNqQjtJQUVRQSxhQUFtQjtRQUN6QkMsSUFBQUEsOENBQXNCLElBQUdDLGdCQUFnQixDQUFDLElBQUksQ0FBQ1IsTUFBTTtRQUNyRFMsSUFBQUEsOENBQXNCLElBQUdELGdCQUFnQixDQUFDLElBQUksQ0FBQ1IsTUFBTTtRQUNyRFUsSUFBQUEscURBQTBCLElBQUdGLGdCQUFnQixDQUFDLElBQUksQ0FBQ1IsTUFBTTtRQUN6RFcsSUFBQUEsc0RBQTBCLElBQUdILGdCQUFnQixDQUFDLElBQUksQ0FBQ1IsTUFBTTtJQUMzRDtBQUNGO0FBcEJhRjtJQURaYyxJQUFBQSxxQkFBVTs7O0dBQ0VkIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain_exports = {};
__export(UserEntityToUserDomain_exports, {
  UserEntityToUserDomain: () => UserEntityToUserDomain
});
module.exports = __toCommonJS(UserEntityToUserDomain_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserEntityToUserDomain
});
//# sourceMappingURL=UserEntityToUserDomain.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserEntityToUserDomain", {
    enumerable: true,
    get: ()=>UserEntityToUserDomain
});
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _user = require("../../../../core/domain/User/User");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const UserEntityToUserDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
            }, _user.User).forMember('role', (opt)=>opt.mapFrom((src)=>src.role.name));
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Vc2VyL1VzZXJFbnRpdHlUb1VzZXJEb21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuXG5pbXBvcnQgeyBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyJztcbmltcG9ydCB7IFVzZXIgYXMgVXNlckVudGl0eSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1VzZXInO1xuXG5pbXBvcnQgeyBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJFbnRpdHlUb1VzZXJEb21haW4gPSAoKTogSU1hcHBpbmcgPT4gKHtcbiAgY29uZmlndXJlTWFwcGluZyhtYXBwZXI6IE1hcHBlcik6IHZvaWQge1xuICAgIG1hcHBlclxuICAgICAgLmNyZWF0ZU1hcDxVc2VyRW50aXR5LCBVc2VyPihcbiAgICAgICAge1xuICAgICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgICAgICBzb3VyY2U6IERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMuVVNFUl9FTlRJVFksXG4gICAgICAgIH0sXG4gICAgICAgIFVzZXJcbiAgICAgIClcbiAgICAgIC5mb3JNZW1iZXIoJ3JvbGUnLCAob3B0KSA9PiBvcHQubWFwRnJvbSgoc3JjKSA9PiBzcmMucm9sZS5uYW1lKSk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJVc2VyRW50aXR5VG9Vc2VyRG9tYWluIiwiY29uZmlndXJlTWFwcGluZyIsIm1hcHBlciIsImNyZWF0ZU1hcCIsImRlc3RpbmF0aW9uIiwiRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMiLCJVU0VSX0RPTUFJTiIsInNvdXJjZSIsIkRBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMiLCJVU0VSX0VOVElUWSIsIlVzZXIiLCJmb3JNZW1iZXIiLCJvcHQiLCJtYXBGcm9tIiwic3JjIiwicm9sZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzthQUFBQTs7bUNBUDhCO3NCQUV0Qjs2Q0FHd0I7QUFFdEMsTUFBTUEseUJBQXlCLElBQWlCLENBQUE7UUFDckRDLGtCQUFpQkMsTUFBYyxFQUFRO1lBQ3JDQSxPQUNHQyxTQUFTLENBQ1I7Z0JBQ0VDLGFBQWFDLDZDQUEwQixDQUFDQyxXQUFXO2dCQUNuREMsUUFBUUMseURBQTRCLENBQUNDLFdBQVc7WUFDbEQsR0FDQUMsVUFBSSxFQUVMQyxTQUFTLENBQUMsUUFBUSxDQUFDQyxNQUFRQSxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxDQUFDQyxJQUFJO1FBQ2xFO0lBQ0YsQ0FBQSJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/infrastructure/database/mappings/Role/RoleEntityToRoleDomain.ts
var RoleEntityToRoleDomain_exports = {};
__export(RoleEntityToRoleDomain_exports, {
  RoleEntityToRoleDomain: () => RoleEntityToRoleDomain
});
module.exports = __toCommonJS(RoleEntityToRoleDomain_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoleEntityToRoleDomain
});
//# sourceMappingURL=RoleEntityToRoleDomain.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleEntityToRoleDomain", {
    enumerable: true,
    get: ()=>RoleEntityToRoleDomain
});
const _role = require("../../../../core/domain/Role/Role");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const RoleEntityToRoleDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
            }, _role.Role);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9Sb2xlL1JvbGVFbnRpdHlUb1JvbGVEb21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJ2NvcmUvZG9tYWluL1JvbGUvUm9sZSc7XG5pbXBvcnQgeyBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2luZnJhc3RydWN0dXJlL0luZnJhc3RydWN0dXJlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBSb2xlIGFzIFJvbGVFbnRpdHkgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Sb2xlJztcblxuZXhwb3J0IGNvbnN0IFJvbGVFbnRpdHlUb1JvbGVEb21haW4gPSAoKTogSU1hcHBpbmcgPT4gKHtcbiAgY29uZmlndXJlTWFwcGluZyhtYXBwZXI6IE1hcHBlcik6IHZvaWQge1xuICAgIG1hcHBlci5jcmVhdGVNYXA8Um9sZUVudGl0eSwgUm9sZT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5ST0xFX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlJPTEVfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIFJvbGVcbiAgICApO1xuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiUm9sZUVudGl0eVRvUm9sZURvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiUk9MRV9ET01BSU4iLCJzb3VyY2UiLCJEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIiwiUk9MRV9FTlRJVFkiLCJSb2xlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7YUFBQUE7O3NCQUxRO21DQUNzQjs2Q0FDRTtBQUd0QyxNQUFNQSx5QkFBeUIsSUFBaUIsQ0FBQTtRQUNyREMsa0JBQWlCQyxNQUFjLEVBQVE7WUFDckNBLE9BQU9DLFNBQVMsQ0FDZDtnQkFDRUMsYUFBYUMsNkNBQTBCLENBQUNDLFdBQVc7Z0JBQ25EQyxRQUFRQyx5REFBNEIsQ0FBQ0MsV0FBVztZQUNsRCxHQUNBQyxVQUFJO1FBRVI7SUFDRixDQUFBIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/infrastructure/InfrastructureModuleSymbols.ts
var InfrastructureModuleSymbols_exports = {};
__export(InfrastructureModuleSymbols_exports, {
  DATABASE_IDENTIFIERS: () => DATABASE_IDENTIFIERS,
  DATABASE_MAPPING_IDENTIFIERS: () => DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS: () => INFRASTRUCTURE_IDENTIFIERS
});
module.exports = __toCommonJS(InfrastructureModuleSymbols_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DATABASE_IDENTIFIERS,
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
});
//# sourceMappingURL=InfrastructureModuleSymbols.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DATABASE_IDENTIFIERS: ()=>DATABASE_IDENTIFIERS,
    INFRASTRUCTURE_IDENTIFIERS: ()=>INFRASTRUCTURE_IDENTIFIERS,
    DATABASE_MAPPING_IDENTIFIERS: ()=>DATABASE_MAPPING_IDENTIFIERS
});
const DATABASE_IDENTIFIERS = {
    ORM: Symbol.for('Orm')
};
const INFRASTRUCTURE_IDENTIFIERS = {
    DB_MAPPER: Symbol.for('DBMapper')
};
const DATABASE_MAPPING_IDENTIFIERS = {
    USER_ENTITY: Symbol.for('UserEntity'),
    ROLE_ENTITY: Symbol.for('RoleEntity'),
    COFFEE_ENTITY: Symbol.for('CoffeeEntity'),
    REVIEW_ENTITY: Symbol.for('ReviewEntity')
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9JbmZyYXN0cnVjdHVyZU1vZHVsZVN5bWJvbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERBVEFCQVNFX0lERU5USUZJRVJTID0ge1xuICBPUk06IFN5bWJvbC5mb3IoJ09ybScpLFxufTtcblxuZXhwb3J0IGNvbnN0IElORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTID0ge1xuICBEQl9NQVBQRVI6IFN5bWJvbC5mb3IoJ0RCTWFwcGVyJyksXG59O1xuXG5leHBvcnQgY29uc3QgREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyA9IHtcbiAgVVNFUl9FTlRJVFk6IFN5bWJvbC5mb3IoJ1VzZXJFbnRpdHknKSxcbiAgUk9MRV9FTlRJVFk6IFN5bWJvbC5mb3IoJ1JvbGVFbnRpdHknKSxcbiAgQ09GRkVFX0VOVElUWTogU3ltYm9sLmZvcignQ29mZmVlRW50aXR5JyksXG4gIFJFVklFV19FTlRJVFk6IFN5bWJvbC5mb3IoJ1Jldmlld0VudGl0eScpLFxufTtcbiJdLCJuYW1lcyI6WyJEQVRBQkFTRV9JREVOVElGSUVSUyIsIklORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTIiwiREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyIsIk9STSIsIlN5bWJvbCIsImZvciIsIkRCX01BUFBFUiIsIlVTRVJfRU5USVRZIiwiUk9MRV9FTlRJVFkiLCJDT0ZGRUVfRU5USVRZIiwiUkVWSUVXX0VOVElUWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBYUEsb0JBQW9CLE1BQXBCQTtJQUlBQywwQkFBMEIsTUFBMUJBO0lBSUFDLDRCQUE0QixNQUE1QkE7O0FBUk4sTUFBTUYsdUJBQXVCO0lBQ2xDRyxLQUFLQyxPQUFPQyxHQUFHLENBQUM7QUFDbEI7QUFFTyxNQUFNSiw2QkFBNkI7SUFDeENLLFdBQVdGLE9BQU9DLEdBQUcsQ0FBQztBQUN4QjtBQUVPLE1BQU1ILCtCQUErQjtJQUMxQ0ssYUFBYUgsT0FBT0MsR0FBRyxDQUFDO0lBQ3hCRyxhQUFhSixPQUFPQyxHQUFHLENBQUM7SUFDeEJJLGVBQWVMLE9BQU9DLEdBQUcsQ0FBQztJQUMxQkssZUFBZU4sT0FBT0MsR0FBRyxDQUFDO0FBQzVCIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

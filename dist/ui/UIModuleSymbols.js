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

// src/ui/UIModuleSymbols.ts
var UIModuleSymbols_exports = {};
__export(UIModuleSymbols_exports, {
  UI_APPLICATION_IDENTIFIERS: () => UI_APPLICATION_IDENTIFIERS,
  UI_IDENTIFIERS: () => UI_IDENTIFIERS,
  UI_MAPPINGS_IDENTIFIERS: () => UI_MAPPINGS_IDENTIFIERS
});
module.exports = __toCommonJS(UIModuleSymbols_exports);
var UI_IDENTIFIERS = {
  UI_MAPPER: Symbol.for("UIMapper")
};
var UI_APPLICATION_IDENTIFIERS = {
  EXPRESS: Symbol.for("Express"),
  EXPRESS_ROUTER: Symbol.for("ExpressRouter"),
  EXPRESS_APPLICATION: Symbol.for("ExpressApplication"),
  INVERSIFY_APPLICATION: Symbol.for("InversifyExpressApplication"),
  JWT_TOKEN_UTIL: Symbol.for("JWTTokenUtil"),
  JWT_AUTHENTICATION_HANDLER: Symbol.for("JWTAuthenticationHandler"),
  LOGGER: Symbol.for("Logger"),
  LOGGER_FORMAT: Symbol.for("WinstonFormat"),
  LOGGER_WINSTON: Symbol.for("WinstonLogger")
};
var UI_MAPPINGS_IDENTIFIERS = {
  USER_UI: Symbol.for("UserUI")
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UI_APPLICATION_IDENTIFIERS,
  UI_IDENTIFIERS,
  UI_MAPPINGS_IDENTIFIERS
});
//# sourceMappingURL=UIModuleSymbols.js.map
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
    UI_IDENTIFIERS: ()=>UI_IDENTIFIERS,
    UI_APPLICATION_IDENTIFIERS: ()=>UI_APPLICATION_IDENTIFIERS,
    UI_MAPPINGS_IDENTIFIERS: ()=>UI_MAPPINGS_IDENTIFIERS
});
const UI_IDENTIFIERS = {
    UI_MAPPER: Symbol.for('UIMapper')
};
const UI_APPLICATION_IDENTIFIERS = {
    EXPRESS: Symbol.for('Express'),
    EXPRESS_ROUTER: Symbol.for('ExpressRouter'),
    EXPRESS_APPLICATION: Symbol.for('ExpressApplication'),
    INVERSIFY_APPLICATION: Symbol.for('InversifyExpressApplication'),
    JWT_TOKEN_UTIL: Symbol.for('JWTTokenUtil'),
    JWT_AUTHENTICATION_HANDLER: Symbol.for('JWTAuthenticationHandler'),
    LOGGER: Symbol.for('Logger'),
    LOGGER_FORMAT: Symbol.for('WinstonFormat'),
    LOGGER_WINSTON: Symbol.for('WinstonLogger')
};
const UI_MAPPINGS_IDENTIFIERS = {
    USER_UI: Symbol.for('UserUI')
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9VSU1vZHVsZVN5bWJvbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVJX0lERU5USUZJRVJTID0ge1xuICBVSV9NQVBQRVI6IFN5bWJvbC5mb3IoJ1VJTWFwcGVyJyksXG59O1xuXG5leHBvcnQgY29uc3QgVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMgPSB7XG4gIEVYUFJFU1M6IFN5bWJvbC5mb3IoJ0V4cHJlc3MnKSxcbiAgRVhQUkVTU19ST1VURVI6IFN5bWJvbC5mb3IoJ0V4cHJlc3NSb3V0ZXInKSxcblxuICBFWFBSRVNTX0FQUExJQ0FUSU9OOiBTeW1ib2wuZm9yKCdFeHByZXNzQXBwbGljYXRpb24nKSxcbiAgSU5WRVJTSUZZX0FQUExJQ0FUSU9OOiBTeW1ib2wuZm9yKCdJbnZlcnNpZnlFeHByZXNzQXBwbGljYXRpb24nKSxcbiAgSldUX1RPS0VOX1VUSUw6IFN5bWJvbC5mb3IoJ0pXVFRva2VuVXRpbCcpLFxuICBKV1RfQVVUSEVOVElDQVRJT05fSEFORExFUjogU3ltYm9sLmZvcignSldUQXV0aGVudGljYXRpb25IYW5kbGVyJyksXG5cbiAgTE9HR0VSOiBTeW1ib2wuZm9yKCdMb2dnZXInKSxcbiAgTE9HR0VSX0ZPUk1BVDogU3ltYm9sLmZvcignV2luc3RvbkZvcm1hdCcpLFxuICBMT0dHRVJfV0lOU1RPTjogU3ltYm9sLmZvcignV2luc3RvbkxvZ2dlcicpLFxufTtcblxuZXhwb3J0IGNvbnN0IFVJX01BUFBJTkdTX0lERU5USUZJRVJTID0ge1xuICBVU0VSX1VJOiBTeW1ib2wuZm9yKCdVc2VyVUknKSxcbn07XG4iXSwibmFtZXMiOlsiVUlfSURFTlRJRklFUlMiLCJVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyIsIlVJX01BUFBJTkdTX0lERU5USUZJRVJTIiwiVUlfTUFQUEVSIiwiU3ltYm9sIiwiZm9yIiwiRVhQUkVTUyIsIkVYUFJFU1NfUk9VVEVSIiwiRVhQUkVTU19BUFBMSUNBVElPTiIsIklOVkVSU0lGWV9BUFBMSUNBVElPTiIsIkpXVF9UT0tFTl9VVElMIiwiSldUX0FVVEhFTlRJQ0FUSU9OX0hBTkRMRVIiLCJMT0dHRVIiLCJMT0dHRVJfRk9STUFUIiwiTE9HR0VSX1dJTlNUT04iLCJVU0VSX1VJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFhQSxjQUFjLE1BQWRBO0lBSUFDLDBCQUEwQixNQUExQkE7SUFjQUMsdUJBQXVCLE1BQXZCQTs7QUFsQk4sTUFBTUYsaUJBQWlCO0lBQzVCRyxXQUFXQyxPQUFPQyxHQUFHLENBQUM7QUFDeEI7QUFFTyxNQUFNSiw2QkFBNkI7SUFDeENLLFNBQVNGLE9BQU9DLEdBQUcsQ0FBQztJQUNwQkUsZ0JBQWdCSCxPQUFPQyxHQUFHLENBQUM7SUFFM0JHLHFCQUFxQkosT0FBT0MsR0FBRyxDQUFDO0lBQ2hDSSx1QkFBdUJMLE9BQU9DLEdBQUcsQ0FBQztJQUNsQ0ssZ0JBQWdCTixPQUFPQyxHQUFHLENBQUM7SUFDM0JNLDRCQUE0QlAsT0FBT0MsR0FBRyxDQUFDO0lBRXZDTyxRQUFRUixPQUFPQyxHQUFHLENBQUM7SUFDbkJRLGVBQWVULE9BQU9DLEdBQUcsQ0FBQztJQUMxQlMsZ0JBQWdCVixPQUFPQyxHQUFHLENBQUM7QUFDN0I7QUFFTyxNQUFNSCwwQkFBMEI7SUFDckNhLFNBQVNYLE9BQU9DLEdBQUcsQ0FBQztBQUN0QiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

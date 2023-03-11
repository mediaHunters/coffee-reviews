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

// src/core/domain/Coffee/CoffeeType.ts
var CoffeeType_exports = {};
__export(CoffeeType_exports, {
  COFFEE_TYPE: () => COFFEE_TYPE
});
module.exports = __toCommonJS(CoffeeType_exports);
var COFFEE_TYPE = /* @__PURE__ */ ((COFFEE_TYPE2) => {
  COFFEE_TYPE2["BEANS"] = "BEANS";
  COFFEE_TYPE2["POWDER"] = "POWDER";
  return COFFEE_TYPE2;
})(COFFEE_TYPE || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COFFEE_TYPE
});
//# sourceMappingURL=CoffeeType.js.map
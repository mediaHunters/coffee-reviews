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

// src/core/domain/Coffee/CoffeeBurnLvl.ts
var CoffeeBurnLvl_exports = {};
__export(CoffeeBurnLvl_exports, {
  COFFEE_BURNT_LVL: () => COFFEE_BURNT_LVL
});
module.exports = __toCommonJS(CoffeeBurnLvl_exports);
var COFFEE_BURNT_LVL = /* @__PURE__ */ ((COFFEE_BURNT_LVL2) => {
  COFFEE_BURNT_LVL2["LIGHT_ROAST"] = "LIGHT_ROAST";
  COFFEE_BURNT_LVL2["MEDUIM_ROAST"] = "MEDIUM_ROAST";
  COFFEE_BURNT_LVL2["DARK_ROAST"] = "DARK_ROAST";
  return COFFEE_BURNT_LVL2;
})(COFFEE_BURNT_LVL || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COFFEE_BURNT_LVL
});
//# sourceMappingURL=CoffeeBurnLvl.js.map
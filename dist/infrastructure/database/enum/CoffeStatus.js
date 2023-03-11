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

// src/infrastructure/database/enum/CoffeStatus.ts
var CoffeStatus_exports = {};
__export(CoffeStatus_exports, {
  COFFEE_STATUS: () => COFFEE_STATUS
});
module.exports = __toCommonJS(CoffeStatus_exports);
var COFFEE_STATUS = /* @__PURE__ */ ((COFFEE_STATUS2) => {
  COFFEE_STATUS2["WAITING_QUEUE"] = "WAITING_QUEUE";
  COFFEE_STATUS2["VERIFIED"] = "VERIFIED";
  COFFEE_STATUS2["BLOCKED"] = "BLOCKED";
  return COFFEE_STATUS2;
})(COFFEE_STATUS || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COFFEE_STATUS
});
//# sourceMappingURL=CoffeStatus.js.map
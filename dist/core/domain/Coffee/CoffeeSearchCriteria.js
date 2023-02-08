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

// src/core/domain/Coffee/CoffeeSearchCriteria.ts
var CoffeeSearchCriteria_exports = {};
__export(CoffeeSearchCriteria_exports, {
  CoffeeSearchCriteria: () => CoffeeSearchCriteria
});
module.exports = __toCommonJS(CoffeeSearchCriteria_exports);
var CoffeeSearchCriteria = /* @__PURE__ */ ((CoffeeSearchCriteria2) => {
  CoffeeSearchCriteria2["DATE"] = "date";
  CoffeeSearchCriteria2["HIGHEST_RATING"] = "rating";
  CoffeeSearchCriteria2["HIGHEST_COMMENTS_AMOUNT"] = "HIGHEST_COMMENTS_AMOUNT";
  CoffeeSearchCriteria2["ALPHABETICALLY"] = "ALPHABETICALLY";
  return CoffeeSearchCriteria2;
})(CoffeeSearchCriteria || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoffeeSearchCriteria
});
//# sourceMappingURL=CoffeeSearchCriteria.js.map
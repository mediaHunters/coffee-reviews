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

// src/ui/portal/Coffee/requests/command/CreateCoffeeCommandBody.ts
var CreateCoffeeCommandBody_exports = {};
__export(CreateCoffeeCommandBody_exports, {
  CreateCoffeeCommandBody: () => CreateCoffeeCommandBody
});
module.exports = __toCommonJS(CreateCoffeeCommandBody_exports);
var CreateCoffeeCommandBody = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, CoffeeStatus, reflink) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.CoffeeStatus = CoffeeStatus;
    this.reflink = reflink;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateCoffeeCommandBody
});
//# sourceMappingURL=CreateCoffeeCommandBody.js.map
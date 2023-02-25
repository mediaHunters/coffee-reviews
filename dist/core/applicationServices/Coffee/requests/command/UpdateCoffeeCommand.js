"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand.ts
var UpdateCoffeeCommand_exports = {};
__export(UpdateCoffeeCommand_exports, {
  UpdateCoffeeCommand: () => UpdateCoffeeCommand
});
module.exports = __toCommonJS(UpdateCoffeeCommand_exports);
var UpdateCoffeeCommand = class {
  constructor(coffee, coffeeId) {
    this.coffee = coffee;
    this.coffeeId = coffeeId;
  }
};
__name(UpdateCoffeeCommand, "UpdateCoffeeCommand");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateCoffeeCommand
});
//# sourceMappingURL=UpdateCoffeeCommand.js.map
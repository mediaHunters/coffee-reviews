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

// src/core/applicationServices/Coffee/requests/command/AddCoffeeCommand.ts
var AddCoffeeCommand_exports = {};
__export(AddCoffeeCommand_exports, {
  CreateCoffeeCommand: () => CreateCoffeeCommand
});
module.exports = __toCommonJS(AddCoffeeCommand_exports);
var CreateCoffeeCommand = class {
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
  CreateCoffeeCommand
});
//# sourceMappingURL=AddCoffeeCommand.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCoffeeCommand", {
    enumerable: true,
    get: ()=>CreateCoffeeCommand
});
class CreateCoffeeCommand {
    constructor(brand, name, type, imgUrl, description, burntLvl, CoffeeStatus, reflink){
        this.brand = brand;
        this.name = name;
        this.type = type;
        this.imgUrl = imgUrl;
        this.description = description;
        this.burntLvl = burntLvl;
        this.CoffeeStatus = CoffeeStatus;
        this.reflink = reflink;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvQWRkQ29mZmVlQ29tbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3JlYXRlQ29mZmVlQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBicmFuZDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1nVXJsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGJ1cm50THZsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IENvZmZlZVN0YXR1czogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSByZWZsaW5rPzogc3RyaW5nXG4gICkge31cbn1cbiJdLCJuYW1lcyI6WyJDcmVhdGVDb2ZmZWVDb21tYW5kIiwiY29uc3RydWN0b3IiLCJicmFuZCIsIm5hbWUiLCJ0eXBlIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJidXJudEx2bCIsIkNvZmZlZVN0YXR1cyIsInJlZmxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7K0JBQWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUNrQkMsT0FDQUMsTUFDQUMsTUFDQUMsUUFDQUMsYUFDQUMsVUFDQUMsY0FDQUMsUUFDaEI7cUJBUmdCUDtvQkFDQUM7b0JBQ0FDO3NCQUNBQzsyQkFDQUM7d0JBQ0FDOzRCQUNBQzt1QkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/core/domainServices/Coffee/requests/repository/command/AddReviewRepositoryCommand.ts
var AddReviewRepositoryCommand_exports = {};
__export(AddReviewRepositoryCommand_exports, {
  AddCoffeeReviewRepositoryCommand: () => AddCoffeeReviewRepositoryCommand
});
module.exports = __toCommonJS(AddReviewRepositoryCommand_exports);
var AddCoffeeReviewRepositoryCommand = class {
  constructor(userId, coffeeId, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCoffeeReviewRepositoryCommand
});
//# sourceMappingURL=AddReviewRepositoryCommand.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddCoffeeReviewRepositoryCommand", {
    enumerable: true,
    get: ()=>AddCoffeeReviewRepositoryCommand
});
class AddCoffeeReviewRepositoryCommand {
    constructor(userId, coffeeId, look, smell, taste){
        this.userId = userId;
        this.coffeeId = coffeeId;
        this.look = look;
        this.smell = smell;
        this.taste = taste;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9yZXBvc2l0b3J5L2NvbW1hbmQvQWRkUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFkZENvZmZlZVJldmlld1JlcG9zaXRvcnlDb21tYW5kIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHVzZXJJZDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBjb2ZmZWVJZDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBsb29rOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHNtZWxsOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHRhc3RlOiBudW1iZXJcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIkFkZENvZmZlZVJldmlld1JlcG9zaXRvcnlDb21tYW5kIiwiY29uc3RydWN0b3IiLCJ1c2VySWQiLCJjb2ZmZWVJZCIsImxvb2siLCJzbWVsbCIsInRhc3RlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLFFBQ0FDLFVBQ0FDLE1BQ0FDLE9BQ0FDLE1BQ2hCO3NCQUxnQko7d0JBQ0FDO29CQUNBQztxQkFDQUM7cUJBQ0FDO0lBQ2Y7QUFDTCJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

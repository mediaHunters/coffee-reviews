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

// src/core/applicationServices/Review/requests/command/AddReviewCommand.ts
var AddReviewCommand_exports = {};
__export(AddReviewCommand_exports, {
  AddReviewCommand: () => AddReviewCommand
});
module.exports = __toCommonJS(AddReviewCommand_exports);
var AddReviewCommand = class {
  constructor(userId, coffeeId, rating, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.rating = rating;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddReviewCommand
});
//# sourceMappingURL=AddReviewCommand.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddReviewCommand", {
    enumerable: true,
    get: ()=>AddReviewCommand
});
class AddReviewCommand {
    constructor(userId, coffeeId, rating, look, smell, taste){
        this.userId = userId;
        this.coffeeId = coffeeId;
        this.rating = rating;
        this.look = look;
        this.smell = smell;
        this.taste = taste;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvQWRkUmV2aWV3Q29tbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWRkUmV2aWV3Q29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSB1c2VySWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmF0aW5nOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGxvb2s6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgc21lbGw6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFzdGU6IG51bWJlclxuICApIHt9XG59XG4iXSwibmFtZXMiOlsiQWRkUmV2aWV3Q29tbWFuZCIsImNvbnN0cnVjdG9yIiwidXNlcklkIiwiY29mZmVlSWQiLCJyYXRpbmciLCJsb29rIiwic21lbGwiLCJ0YXN0ZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7O2FBQUFBOztBQUFOLE1BQU1BO0lBQ1hDLFlBQ2tCQyxRQUNBQyxVQUNBQyxRQUNBQyxNQUNBQyxPQUNBQyxNQUNoQjtzQkFOZ0JMO3dCQUNBQztzQkFDQUM7b0JBQ0FDO3FCQUNBQztxQkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

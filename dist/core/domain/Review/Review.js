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

// src/core/domain/Review/Review.ts
var Review_exports = {};
__export(Review_exports, {
  Review: () => Review
});
module.exports = __toCommonJS(Review_exports);
var Review = class {
  constructor(id, look, smell, taste, rating, coffeeId, userId) {
    this.id = id;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
    this.rating = rating;
    this.coffeeId = coffeeId;
    this.userId = userId;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Review
});
//# sourceMappingURL=Review.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Review", {
    enumerable: true,
    get: ()=>Review
});
class Review {
    constructor(id, look, smell, taste, rating, coffeeId, userId){
        this.id = id;
        this.look = look;
        this.smell = smell;
        this.taste = taste;
        this.rating = rating;
        this.coffeeId = coffeeId;
        this.userId = userId;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpbi9SZXZpZXcvUmV2aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXZpZXcge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbG9vazogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSBzbWVsbDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB0YXN0ZTogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSByYXRpbmc6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdXNlcklkOiBzdHJpbmdcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIlJldmlldyIsImNvbnN0cnVjdG9yIiwiaWQiLCJsb29rIiwic21lbGwiLCJ0YXN0ZSIsInJhdGluZyIsImNvZmZlZUlkIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLElBQ0FDLE1BQ0FDLE9BQ0FDLE9BQ0FDLFFBQ0FDLFVBQ0FDLE9BQ2hCO2tCQVBnQk47b0JBQ0FDO3FCQUNBQztxQkFDQUM7c0JBQ0FDO3dCQUNBQztzQkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

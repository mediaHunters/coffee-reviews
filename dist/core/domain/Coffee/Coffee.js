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

// src/core/domain/Coffee/Coffee.ts
var Coffee_exports = {};
__export(Coffee_exports, {
  Coffee: () => Coffee
});
module.exports = __toCommonJS(Coffee_exports);
var Coffee = class {
  constructor(id, brand, name, type, imgUrl, description, burntLvl, createdAt, reviews, reflink) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.createdAt = createdAt;
    this.reviews = reviews;
    this.reflink = reflink;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Coffee
});
//# sourceMappingURL=Coffee.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Coffee", {
    enumerable: true,
    get: ()=>Coffee
});
class Coffee {
    constructor(id, brand, name, type, imgUrl, description, burntLvl, createdAt, reviews, reflink){
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.type = type;
        this.imgUrl = imgUrl;
        this.description = description;
        this.burntLvl = burntLvl;
        this.createdAt = createdAt;
        this.reviews = reviews;
        this.reflink = reflink;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpbi9Db2ZmZWUvQ29mZmVlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2ZmZWUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgYnJhbmQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGltZ1VybDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBidXJudEx2bDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBjcmVhdGVkQXQ6IERhdGUsXG4gICAgcHVibGljIHJlYWRvbmx5IHJldmlld3M6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVmbGluazogc3RyaW5nXG4gICkge31cbn1cbiJdLCJuYW1lcyI6WyJDb2ZmZWUiLCJjb25zdHJ1Y3RvciIsImlkIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiYnVybnRMdmwiLCJjcmVhdGVkQXQiLCJyZXZpZXdzIiwicmVmbGluayJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7O2FBQUFBOztBQUFOLE1BQU1BO0lBQ1hDLFlBQ2tCQyxJQUNBQyxPQUNBQyxNQUNBQyxNQUNBQyxRQUNBQyxhQUNBQyxVQUNBQyxXQUNBQyxTQUNBQyxRQUNoQjtrQkFWZ0JUO3FCQUNBQztvQkFDQUM7b0JBQ0FDO3NCQUNBQzsyQkFDQUM7d0JBQ0FDO3lCQUNBQzt1QkFDQUM7dUJBQ0FDO0lBQ2Y7QUFDTCJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

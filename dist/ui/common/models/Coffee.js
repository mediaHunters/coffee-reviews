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

// src/ui/common/models/Coffee.ts
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbW9kZWxzL0NvZmZlZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXZpZXcgfSBmcm9tICdjb3JlL2RvbWFpbi9SZXZpZXcvUmV2aWV3JztcblxuZXhwb3J0IGNsYXNzIENvZmZlZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBicmFuZDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1nVXJsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGJ1cm50THZsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGNyZWF0ZWRBdDogRGF0ZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmV2aWV3czogUmV2aWV3LFxuICAgIHB1YmxpYyByZWFkb25seSByZWZsaW5rOiBzdHJpbmdcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIkNvZmZlZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJicmFuZCIsIm5hbWUiLCJ0eXBlIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJidXJudEx2bCIsImNyZWF0ZWRBdCIsInJldmlld3MiLCJyZWZsaW5rIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLElBQ0FDLE9BQ0FDLE1BQ0FDLE1BQ0FDLFFBQ0FDLGFBQ0FDLFVBQ0FDLFdBQ0FDLFNBQ0FDLFFBQ2hCO2tCQVZnQlQ7cUJBQ0FDO29CQUNBQztvQkFDQUM7c0JBQ0FDOzJCQUNBQzt3QkFDQUM7eUJBQ0FDO3VCQUNBQzt1QkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

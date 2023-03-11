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

// src/ui/common/config/application/common/BaseApplication.ts
var BaseApplication_exports = {};
__export(BaseApplication_exports, {
  BaseApplication: () => BaseApplication
});
module.exports = __toCommonJS(BaseApplication_exports);
var BaseApplication = class {
  constructor(app) {
    this.app = app;
  }
  getApplication() {
    return this.app;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseApplication
});
//# sourceMappingURL=BaseApplication.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseApplication", {
    enumerable: true,
    get: ()=>BaseApplication
});
class BaseApplication {
    constructor(app){
        this.app = app;
    }
    getApplication() {
        return this.app;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9CYXNlQXBwbGljYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBcHBsaWNhdGlvbjxUPiB7XG4gIHByb3RlY3RlZCByZWFkb25seSBhcHA6IFQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFwcDogVCkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGluaXRpYWxpemUoKTogdm9pZDtcblxuICBwdWJsaWMgZ2V0QXBwbGljYXRpb24oKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuYXBwO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmFzZUFwcGxpY2F0aW9uIiwiYXBwIiwiZ2V0QXBwbGljYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBQXNCQTs7YUFBQUE7O0FBQWYsTUFBZUE7SUFHcEIsWUFBc0JDLEdBQU0sQ0FBRTtRQUM1QixJQUFJLENBQUNBLEdBQUcsR0FBR0E7SUFDYjtJQUlPQyxpQkFBb0I7UUFDekIsT0FBTyxJQUFJLENBQUNELEdBQUc7SUFDakI7QUFDRiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

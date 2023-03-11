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

// src/dependency/BaseModule.ts
var BaseModule_exports = {};
__export(BaseModule_exports, {
  BaseModule: () => BaseModule
});
module.exports = __toCommonJS(BaseModule_exports);
var import_inversify = require("inversify");
var BaseModule = class extends import_inversify.ContainerModule {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseModule
});
//# sourceMappingURL=BaseModule.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseModule", {
    enumerable: true,
    get: ()=>BaseModule
});
const _inversify = require("inversify");
class BaseModule extends _inversify.ContainerModule {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBlbmRlbmN5L0Jhc2VNb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyTW9kdWxlLCBpbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2R1bGUgZXh0ZW5kcyBDb250YWluZXJNb2R1bGUge1xuICBwdWJsaWMgYWJzdHJhY3QgaW5pdChiaW5kOiBpbnRlcmZhY2VzLkJpbmQpOiB2b2lkO1xufVxuIl0sIm5hbWVzIjpbIkJhc2VNb2R1bGUiLCJDb250YWluZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRXNCQTs7YUFBQUE7OzJCQUZzQjtBQUVyQyxNQUFlQSxtQkFBbUJDLDBCQUFlO0FBRXhEIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

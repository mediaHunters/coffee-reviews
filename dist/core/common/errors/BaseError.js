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

// src/core/common/errors/BaseError.ts
var BaseError_exports = {};
__export(BaseError_exports, {
  BaseError: () => BaseError
});
module.exports = __toCommonJS(BaseError_exports);
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseError
});
//# sourceMappingURL=BaseError.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: ()=>BaseError
});
class BaseError {
    constructor(code, message = '', name = ''){
        this.code = code;
        this.message = message;
        this.name = name;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9lcnJvcnMvQmFzZUVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlRXJyb3IgaW1wbGVtZW50cyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb2RlPzogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcgPSAnJyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gJydcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIkJhc2VFcnJvciIsImNvbnN0cnVjdG9yIiwiY29kZSIsIm1lc3NhZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLE1BQ0FDLFVBQWtCLEVBQUUsRUFDcEJDLE9BQWUsRUFBRSxDQUNqQztvQkFIZ0JGO3VCQUNBQztvQkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

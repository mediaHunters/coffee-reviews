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

// src/core/common/errors/CoreError.ts
var CoreError_exports = {};
__export(CoreError_exports, {
  CoreError: () => CoreError
});
module.exports = __toCommonJS(CoreError_exports);

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/core/common/errors/CoreError.ts
var CoreError = class extends BaseError {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoreError
});
//# sourceMappingURL=CoreError.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoreError", {
    enumerable: true,
    get: ()=>CoreError
});
const _baseError = require("./BaseError");
class CoreError extends _baseError.BaseError {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbW1vbi9lcnJvcnMvQ29yZUVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJ2NvcmUvY29tbW9uL2Vycm9ycy9CYXNlRXJyb3InO1xuXG5leHBvcnQgY2xhc3MgQ29yZUVycm9yIGV4dGVuZHMgQmFzZUVycm9yIHt9XG4iXSwibmFtZXMiOlsiQ29yZUVycm9yIiwiQmFzZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7YUFBQUE7OzJCQUZhO0FBRW5CLE1BQU1BLGtCQUFrQkMsb0JBQVM7QUFBRSJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/ui/common/config/errors/UserInterfaceError.ts
var UserInterfaceError_exports = {};
__export(UserInterfaceError_exports, {
  UserInterfaceError: () => UserInterfaceError
});
module.exports = __toCommonJS(UserInterfaceError_exports);

// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

// src/ui/common/config/errors/UserInterfaceError.ts
var UserInterfaceError = class extends BaseError {
  constructor(status, code, message = "", name = "") {
    super(code, message, name);
    this.status = status;
    this.code = code;
    this.message = message;
    this.name = name;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserInterfaceError
});
//# sourceMappingURL=UserInterfaceError.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserInterfaceError", {
    enumerable: true,
    get: ()=>UserInterfaceError
});
const _baseError = require("../../../../core/common/errors/BaseError");
class UserInterfaceError extends _baseError.BaseError {
    constructor(status, code, message = '', name = ''){
        super(code, message, name);
        this.status = status;
        this.code = code;
        this.message = message;
        this.name = name;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2Vycm9ycy9Vc2VySW50ZXJmYWNlRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBVc2VySW50ZXJmYWNlRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGNvZGU/OiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnJ1xuICApIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlLCBuYW1lKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVzZXJJbnRlcmZhY2VFcnJvciIsIkJhc2VFcnJvciIsImNvbnN0cnVjdG9yIiwic3RhdHVzIiwiY29kZSIsIm1lc3NhZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7YUFBQUE7OzJCQUZhO0FBRW5CLE1BQU1BLDJCQUEyQkMsb0JBQVM7SUFDL0NDLFlBQ2tCQyxRQUNBQyxNQUNBQyxVQUFrQixFQUFFLEVBQ3BCQyxPQUFlLEVBQUUsQ0FDakM7UUFDQSxLQUFLLENBQUNGLE1BQU1DLFNBQVNDO3NCQUxMSDtvQkFDQUM7dUJBQ0FDO29CQUNBQztJQUdsQjtBQUNGIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

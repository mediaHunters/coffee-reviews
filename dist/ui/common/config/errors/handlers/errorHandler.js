"use strict";
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

// src/ui/common/config/errors/handlers/errorHandler.ts
var errorHandler_exports = {};
__export(errorHandler_exports, {
  errorHandler: () => errorHandler
});
module.exports = __toCommonJS(errorHandler_exports);
var import_http_status_codes = require("http-status-codes");

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

// src/ui/common/config/errors/models/ErrorResponse.ts
var ErrorResponse = class {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
};

// src/ui/common/config/errors/handlers/errorHandler.ts
var errorHandler = (app) => app.use(
  (error, req, res, next) => {
    next();
    switch (error.constructor) {
      case UserInterfaceError:
        return res.status(error.status).json(new ErrorResponse(error.code, error.message));
      case CoreError:
        return res.status(import_http_status_codes.UNPROCESSABLE_ENTITY).json(new ErrorResponse(error.code, error.message));
      case BaseError:
        return res.status(import_http_status_codes.NOT_FOUND).json(new ErrorResponse(error.code, error.message));
      default:
        return res.status(import_http_status_codes.INTERNAL_SERVER_ERROR).json(
          new ErrorResponse(import_http_status_codes.INTERNAL_SERVER_ERROR.toString(), error.message)
        );
    }
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorHandler
});
//# sourceMappingURL=errorHandler.js.map
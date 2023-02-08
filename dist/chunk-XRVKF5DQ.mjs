import {
  BaseError
} from "./chunk-6TCJVVRE.mjs";

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

export {
  UserInterfaceError
};
//# sourceMappingURL=chunk-XRVKF5DQ.mjs.map
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(UserInterfaceError, "UserInterfaceError");

export {
  UserInterfaceError
};
//# sourceMappingURL=chunk-SROXNPPD.mjs.map
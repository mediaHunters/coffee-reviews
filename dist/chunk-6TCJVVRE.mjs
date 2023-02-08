// src/core/common/errors/BaseError.ts
var BaseError = class {
  constructor(code, message = "", name = "") {
    this.code = code;
    this.message = message;
    this.name = name;
  }
};

export {
  BaseError
};
//# sourceMappingURL=chunk-6TCJVVRE.mjs.map
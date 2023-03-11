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

// src/core/applicationServices/Authentication/requests/repository/command/SignUpCommand.ts
var SignUpCommand_exports = {};
__export(SignUpCommand_exports, {
  SignUpCommand: () => SignUpCommand
});
module.exports = __toCommonJS(SignUpCommand_exports);
var SignUpCommand = class {
  constructor(nickname, email, password) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SignUpCommand
});
//# sourceMappingURL=SignUpCommand.js.map
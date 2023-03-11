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
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SignUpCommand", {
    enumerable: true,
    get: ()=>SignUpCommand
});
class SignUpCommand {
    constructor(nickname, email, password){
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vcmVxdWVzdHMvcmVwb3NpdG9yeS9jb21tYW5kL1NpZ25VcENvbW1hbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpZ25VcENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmlja25hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZ1xuICApIHt9XG59XG4iXSwibmFtZXMiOlsiU2lnblVwQ29tbWFuZCIsImNvbnN0cnVjdG9yIiwibmlja25hbWUiLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLFVBQ0FDLE9BQ0FDLFNBQ2hCO3dCQUhnQkY7cUJBQ0FDO3dCQUNBQztJQUNmO0FBQ0wifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

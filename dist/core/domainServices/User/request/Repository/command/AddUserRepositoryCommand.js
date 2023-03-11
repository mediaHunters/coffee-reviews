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

// src/core/domainServices/User/request/Repository/command/AddUserRepositoryCommand.ts
var AddUserRepositoryCommand_exports = {};
__export(AddUserRepositoryCommand_exports, {
  AddUserRepositoryCommand: () => AddUserRepositoryCommand
});
module.exports = __toCommonJS(AddUserRepositoryCommand_exports);
var AddUserRepositoryCommand = class {
  constructor(nickname, email, password, roleId) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddUserRepositoryCommand
});
//# sourceMappingURL=AddUserRepositoryCommand.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddUserRepositoryCommand", {
    enumerable: true,
    get: ()=>AddUserRepositoryCommand
});
class AddUserRepositoryCommand {
    constructor(nickname, email, password, roleId){
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpblNlcnZpY2VzL1VzZXIvcmVxdWVzdC9SZXBvc2l0b3J5L2NvbW1hbmQvQWRkVXNlclJlcG9zaXRvcnlDb21tYW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBZGRVc2VyUmVwb3NpdG9yeUNvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmlja25hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9sZUlkOiBzdHJpbmdcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIkFkZFVzZXJSZXBvc2l0b3J5Q29tbWFuZCIsImNvbnN0cnVjdG9yIiwibmlja25hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZUlkIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLFVBQ0FDLE9BQ0FDLFVBQ0FDLE9BQ2hCO3dCQUpnQkg7cUJBQ0FDO3dCQUNBQztzQkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/ui/common/models/User.ts
var User_exports = {};
__export(User_exports, {
  User: () => User
});
module.exports = __toCommonJS(User_exports);
var User = class {
  constructor(id, nickname, email, role) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.role = role;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
//# sourceMappingURL=User.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "User", {
    enumerable: true,
    get: ()=>User
});
class User {
    constructor(id, nickname, email, role){
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.role = role;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbW9kZWxzL1VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmlja25hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9sZTogc3RyaW5nXG4gICkge31cbn1cbiJdLCJuYW1lcyI6WyJVc2VyIiwiY29uc3RydWN0b3IiLCJpZCIsIm5pY2tuYW1lIiwiZW1haWwiLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDWEMsWUFDa0JDLElBQ0FDLFVBQ0FDLE9BQ0FDLEtBQ2hCO2tCQUpnQkg7d0JBQ0FDO3FCQUNBQztvQkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

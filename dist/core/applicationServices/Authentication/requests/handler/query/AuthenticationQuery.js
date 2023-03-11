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

// src/core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.ts
var AuthenticationQuery_exports = {};
__export(AuthenticationQuery_exports, {
  AuthenticationQuery: () => AuthenticationQuery
});
module.exports = __toCommonJS(AuthenticationQuery_exports);
var AuthenticationQuery = class {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthenticationQuery
});
//# sourceMappingURL=AuthenticationQuery.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthenticationQuery", {
    enumerable: true,
    get: ()=>AuthenticationQuery
});
class AuthenticationQuery {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vcmVxdWVzdHMvaGFuZGxlci9xdWVyeS9BdXRoZW50aWNhdGlvblF1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGVtYWlsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmdcbiAgKSB7fVxufVxuIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uUXVlcnkiLCJjb25zdHJ1Y3RvciIsImVtYWlsIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBQWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUNrQkMsT0FDQUMsU0FDaEI7cUJBRmdCRDt3QkFDQUM7SUFDZjtBQUNMIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

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

// src/ui/common/config/application/common/auth/models/Authentication.ts
var Authentication_exports = {};
__export(Authentication_exports, {
  Authentication: () => Authentication
});
module.exports = __toCommonJS(Authentication_exports);
var Authentication = class {
  constructor(token, user) {
    this.token = token;
    this.user = user;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Authentication
});
//# sourceMappingURL=Authentication.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Authentication", {
    enumerable: true,
    get: ()=>Authentication
});
class Authentication {
    constructor(token, user){
        this.token = token;
        this.user = user;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9hdXRoL21vZGVscy9BdXRoZW50aWNhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyJztcblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHRva2VuOiBzdHJpbmcsIHB1YmxpYyByZWFkb25seSB1c2VyOiBVc2VyKSB7fVxufVxuIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uIiwiY29uc3RydWN0b3IiLCJ0b2tlbiIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUE0QkMsT0FBK0JDLEtBQVk7cUJBQTNDRDtvQkFBK0JDO0lBQWE7QUFDMUUifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

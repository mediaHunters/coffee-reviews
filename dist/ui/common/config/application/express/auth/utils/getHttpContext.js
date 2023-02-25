"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getHttpContext_exports = {};
__export(getHttpContext_exports, {
  getCurrentUser: () => getCurrentUser
});
module.exports = __toCommonJS(getHttpContext_exports);
var getCurrentUser = /* @__PURE__ */ __name((request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
}, "getCurrentUser");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUser
});
//# sourceMappingURL=getHttpContext.js.map
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

// src/ui/common/config/application/express/auth/models/Principal.ts
var Principal_exports = {};
__export(Principal_exports, {
  Principal: () => Principal
});
module.exports = __toCommonJS(Principal_exports);
var Principal = class {
  constructor(details) {
    this.details = details;
  }
  isAuthenticated() {
    return Promise.resolve(!!this.details);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isResourceOwner(resourceId) {
    return Promise.resolve(resourceId === true);
  }
  isInRole(role) {
    return Promise.resolve(role === this.details?.role);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Principal
});
//# sourceMappingURL=Principal.js.map
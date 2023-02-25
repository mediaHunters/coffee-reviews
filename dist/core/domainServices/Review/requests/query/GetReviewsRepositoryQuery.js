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

// src/core/domainServices/Review/requests/query/GetReviewsRepositoryQuery.ts
var GetReviewsRepositoryQuery_exports = {};
__export(GetReviewsRepositoryQuery_exports, {
  GetReviewsRepositoryQuery: () => GetReviewsRepositoryQuery
});
module.exports = __toCommonJS(GetReviewsRepositoryQuery_exports);
var GetReviewsRepositoryQuery = class {
  constructor(userId) {
    this.userId = userId;
  }
};
__name(GetReviewsRepositoryQuery, "GetReviewsRepositoryQuery");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetReviewsRepositoryQuery
});
//# sourceMappingURL=GetReviewsRepositoryQuery.js.map
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

// src/ui/portal/Coffee/requests/query/SearchQueryBody.ts
var SearchQueryBody_exports = {};
__export(SearchQueryBody_exports, {
  SearchQueryBody: () => SearchQueryBody
});
module.exports = __toCommonJS(SearchQueryBody_exports);
var SearchQueryBody = class {
  constructor(sortBy, skip, take) {
    this.sortBy = sortBy;
    this.skip = skip;
    this.take = take;
    skip = skip || 0;
    take = take || 10;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SearchQueryBody
});
//# sourceMappingURL=SearchQueryBody.js.map
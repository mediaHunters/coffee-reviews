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

// src/core/applicationServices/Coffee/requests/query/SearchQuery.ts
var SearchQuery_exports = {};
__export(SearchQuery_exports, {
  SearchQuery: () => SearchQuery
});
module.exports = __toCommonJS(SearchQuery_exports);
var SearchQuery = class {
  constructor(sortBy, skip, take) {
    this.sortBy = sortBy;
    this.skip = skip;
    this.take = take;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SearchQuery
});
//# sourceMappingURL=SearchQuery.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchQuery", {
    enumerable: true,
    get: ()=>SearchQuery
});
class SearchQuery {
    constructor(sortBy, skip, take){
        this.sortBy = sortBy;
        this.skip = skip;
        this.take = take;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L1NlYXJjaFF1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvZmZlZVNlYXJjaENyaXRlcmlhIH0gZnJvbSAnY29yZS9kb21haW4vQ29mZmVlL0NvZmZlZVNlYXJjaENyaXRlcmlhJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHNvcnRCeTogQ29mZmVlU2VhcmNoQ3JpdGVyaWEsXG4gICAgcHVibGljIHJlYWRvbmx5IHNraXA6IG51bWJlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFrZTogbnVtYmVyXG4gICkge31cbn1cbiJdLCJuYW1lcyI6WyJTZWFyY2hRdWVyeSIsImNvbnN0cnVjdG9yIiwic29ydEJ5Iiwic2tpcCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUNrQkMsUUFDQUMsTUFDQUMsS0FDaEI7c0JBSGdCRjtvQkFDQUM7b0JBQ0FDO0lBQ2Y7QUFDTCJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

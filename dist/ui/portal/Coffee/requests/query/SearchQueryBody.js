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
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchQueryBody", {
    enumerable: true,
    get: ()=>SearchQueryBody
});
class SearchQueryBody {
    constructor(sortBy, skip, take){
        this.sortBy = sortBy;
        this.skip = skip;
        this.take = take;
        skip = skip || 0;
        take = take || 10;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L1NlYXJjaFF1ZXJ5Qm9keS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2ZmZWVTZWFyY2hDcml0ZXJpYSB9IGZyb20gJ2NvcmUvZG9tYWluL0NvZmZlZS9Db2ZmZWVTZWFyY2hDcml0ZXJpYSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hRdWVyeUJvZHkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgc29ydEJ5OiBDb2ZmZWVTZWFyY2hDcml0ZXJpYSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2tpcDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB0YWtlOiBudW1iZXJcbiAgKSB7XG4gICAgc2tpcCA9IHNraXAgfHwgMDtcbiAgICB0YWtlID0gdGFrZSB8fCAxMDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlYXJjaFF1ZXJ5Qm9keSIsImNvbnN0cnVjdG9yIiwic29ydEJ5Iiwic2tpcCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUNrQkMsUUFDQUMsTUFDQUMsS0FDaEI7c0JBSGdCRjtvQkFDQUM7b0JBQ0FDO1FBRWhCRCxPQUFPQSxRQUFRO1FBQ2ZDLE9BQU9BLFFBQVE7SUFDakI7QUFDRiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

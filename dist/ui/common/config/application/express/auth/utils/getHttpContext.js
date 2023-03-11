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

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getHttpContext_exports = {};
__export(getHttpContext_exports, {
  getCurrentUser: () => getCurrentUser
});
module.exports = __toCommonJS(getHttpContext_exports);
var getCurrentUser = (request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUser
});
//# sourceMappingURL=getHttpContext.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCurrentUser", {
    enumerable: true,
    get: ()=>getCurrentUser
});
const getCurrentUser = (request)=>{
    const httpContext = Reflect.getMetadata('inversify-express-utils:httpcontext', request);
    // eslint-disable-next-line no-console
    return httpContext.user;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC91dGlscy9nZXRIdHRwQ29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9tb2RlbHMvUHJpbmNpcGFsJztcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcmluY2lwYWwgPT4ge1xuICBjb25zdCBodHRwQ29udGV4dDogaW50ZXJmYWNlcy5IdHRwQ29udGV4dCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXG4gICAgJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzOmh0dHBjb250ZXh0JyxcbiAgICByZXF1ZXN0XG4gICk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiBodHRwQ29udGV4dC51c2VyO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRDdXJyZW50VXNlciIsInJlcXVlc3QiLCJodHRwQ29udGV4dCIsIlJlZmxlY3QiLCJnZXRNZXRhZGF0YSIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBS2FBOzthQUFBQTs7QUFBTixNQUFNQSxpQkFBaUIsQ0FBQ0MsVUFBZ0M7SUFDN0QsTUFBTUMsY0FBc0NDLFFBQVFDLFdBQVcsQ0FDN0QsdUNBQ0FIO0lBRUYsc0NBQXNDO0lBQ3RDLE9BQU9DLFlBQVlHLElBQUk7QUFDekIifQ==
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

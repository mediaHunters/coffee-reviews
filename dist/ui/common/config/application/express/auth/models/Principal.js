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
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Principal", {
    enumerable: true,
    get: ()=>Principal
});
class Principal {
    constructor(details){
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9tb2RlbHMvUHJpbmNpcGFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludGVyZmFjZXMgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICd1aS9jb21tb24vbW9kZWxzL1VzZXInO1xuXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIGltcGxlbWVudHMgaW50ZXJmYWNlcy5QcmluY2lwYWwge1xuICBwdWJsaWMgZGV0YWlsczogVXNlciB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGV0YWlsczogVXNlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIH1cblxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoISF0aGlzLmRldGFpbHMpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHVibGljIGlzUmVzb3VyY2VPd25lcihyZXNvdXJjZUlkOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc291cmNlSWQgPT09IHRydWUpO1xuICB9XG5cbiAgcHVibGljIGlzSW5Sb2xlKHJvbGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9sZSA9PT0gdGhpcy5kZXRhaWxzPy5yb2xlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaW5jaXBhbCIsImRldGFpbHMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzUmVzb3VyY2VPd25lciIsInJlc291cmNlSWQiLCJpc0luUm9sZSIsInJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUdYLFlBQW1CQyxPQUF5QixDQUFFO1FBQzVDLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVPQyxrQkFBb0M7UUFDekMsT0FBT0MsUUFBUUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNILE9BQU87SUFDdkM7SUFFQSw4REFBOEQ7SUFDdkRJLGdCQUFnQkMsVUFBZSxFQUFvQjtRQUN4RCxPQUFPSCxRQUFRQyxPQUFPLENBQUNFLGVBQWUsSUFBSTtJQUM1QztJQUVPQyxTQUFTQyxJQUFZLEVBQW9CO1FBQzlDLE9BQU9MLFFBQVFDLE9BQU8sQ0FBQ0ksU0FBUyxJQUFJLENBQUNQLE9BQU8sRUFBRU87SUFDaEQ7QUFDRiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

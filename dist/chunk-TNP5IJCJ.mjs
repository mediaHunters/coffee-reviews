import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getCurrentUser = /* @__PURE__ */ __name((request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
}, "getCurrentUser");

export {
  getCurrentUser
};
//# sourceMappingURL=chunk-TNP5IJCJ.mjs.map
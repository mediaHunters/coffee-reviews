// src/ui/common/config/application/express/auth/utils/getHttpContext.ts
var getCurrentUser = (request) => {
  const httpContext = Reflect.getMetadata(
    "inversify-express-utils:httpcontext",
    request
  );
  return httpContext.user;
};

export {
  getCurrentUser
};
//# sourceMappingURL=chunk-OODWIYZF.mjs.map
// src/ui/common/config/application/express/auth/models/Principal.ts
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

export {
  Principal
};
//# sourceMappingURL=chunk-3Q737EHZ.mjs.map
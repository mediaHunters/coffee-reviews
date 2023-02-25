import {
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(Principal, "Principal");

export {
  Principal
};
//# sourceMappingURL=chunk-CVMDAOS2.mjs.map
import {
  AuthenticationService
} from "./chunk-Y4T7IYIU.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/dependency/shared/Authentication/AuthenticationModule.ts
var AuthenticationModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideAuthenticationService(bind);
  }
  provideAuthenticationService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE
    ).to(AuthenticationService);
  }
};
__name(AuthenticationModule, "AuthenticationModule");

export {
  AuthenticationModule
};
//# sourceMappingURL=chunk-GCTVOXBS.mjs.map
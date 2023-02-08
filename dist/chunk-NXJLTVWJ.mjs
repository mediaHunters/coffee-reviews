import {
  AuthenticationService
} from "./chunk-MNNAJXYV.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";

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

export {
  AuthenticationModule
};
//# sourceMappingURL=chunk-NXJLTVWJ.mjs.map
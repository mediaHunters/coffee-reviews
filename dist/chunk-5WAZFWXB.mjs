import {
  UserRepository
} from "./chunk-MFQ6MZNO.mjs";
import {
  UserUnitOfWork
} from "./chunk-WC7MTD3P.mjs";
import {
  UserService
} from "./chunk-MZ4Y7GGI.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";

// src/dependency/shared/User/UserModule.ts
var UserModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideUserRepository(bind);
    this.provideUserUnitOfWork(bind);
    this.provideUserService(bind);
  }
  provideUserRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY).to(
      UserRepository
    );
  }
  provideUserUnitOfWork(bind) {
    bind(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK).to(
      UserUnitOfWork
    );
  }
  provideUserService(bind) {
    bind(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_SERVICE).to(
      UserService
    );
  }
};

export {
  UserModule
};
//# sourceMappingURL=chunk-5WAZFWXB.mjs.map
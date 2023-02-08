import {
  UserRepository
} from "./chunk-WEWBXXQX.mjs";
import {
  UserUnitOfWork
} from "./chunk-HV7XLIPJ.mjs";
import {
  UserService
} from "./chunk-LCAIPOWD.mjs";
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
//# sourceMappingURL=chunk-JDQHD7IK.mjs.map
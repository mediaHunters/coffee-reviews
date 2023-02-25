import {
  UserRepository
} from "./chunk-W2MLJHFZ.mjs";
import {
  UserUnitOfWork
} from "./chunk-YLTKZAYK.mjs";
import {
  UserService
} from "./chunk-HVS34UTZ.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(UserModule, "UserModule");

export {
  UserModule
};
//# sourceMappingURL=chunk-HKODC65S.mjs.map
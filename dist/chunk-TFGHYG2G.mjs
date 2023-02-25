import {
  RoleRepository
} from "./chunk-53ZXZRXV.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/dependency/Administration/RoleModule.ts
var RoleModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideRoleRepository(bind);
  }
  provideRoleRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY).to(
      RoleRepository
    );
  }
};
__name(RoleModule, "RoleModule");

export {
  RoleModule
};
//# sourceMappingURL=chunk-TFGHYG2G.mjs.map
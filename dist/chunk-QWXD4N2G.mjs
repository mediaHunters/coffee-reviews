import {
  RoleRepository
} from "./chunk-UJOFCNHR.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  DOMAIN_REPOSITORY_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";

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

export {
  RoleModule
};
//# sourceMappingURL=chunk-QWXD4N2G.mjs.map
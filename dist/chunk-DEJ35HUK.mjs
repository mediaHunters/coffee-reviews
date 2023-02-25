import {
  Role
} from "./chunk-P5RG7LCX.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/mappings/Role/RoleEntityToRoleDomain.ts
var RoleEntityToRoleDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      Role
    );
  }
}), "RoleEntityToRoleDomain");

export {
  RoleEntityToRoleDomain
};
//# sourceMappingURL=chunk-DEJ35HUK.mjs.map
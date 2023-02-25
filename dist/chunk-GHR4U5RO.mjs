import {
  User
} from "./chunk-ZANF4GRN.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      User
    ).forMember("role", (opt) => opt.mapFrom((src) => src.role.name));
  }
}), "UserEntityToUserDomain");

export {
  UserEntityToUserDomain
};
//# sourceMappingURL=chunk-GHR4U5RO.mjs.map
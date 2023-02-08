import {
  User
} from "./chunk-OKUYDJP7.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";

// src/infrastructure/database/mappings/User/UserEntityToUserDomain.ts
var UserEntityToUserDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY
      },
      User
    ).forMember("role", (opt) => opt.mapFrom((src) => src.role.name));
  }
});

export {
  UserEntityToUserDomain
};
//# sourceMappingURL=chunk-PYQS4V3E.mjs.map
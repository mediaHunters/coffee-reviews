import {
  User
} from "./chunk-OKUYDJP7.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  UI_MAPPINGS_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";

// src/ui/common/mappings/User/UserDomainToUserUI.ts
var UserDomainToUserUI = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      User
    );
  }
});

export {
  UserDomainToUserUI
};
//# sourceMappingURL=chunk-JVFB7EOP.mjs.map
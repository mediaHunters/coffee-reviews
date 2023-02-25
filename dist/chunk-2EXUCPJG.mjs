import {
  User
} from "./chunk-ZANF4GRN.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  UI_MAPPINGS_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/mappings/User/UserDomainToUserUI.ts
var UserDomainToUserUI = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      User
    );
  }
}), "UserDomainToUserUI");

export {
  UserDomainToUserUI
};
//# sourceMappingURL=chunk-2EXUCPJG.mjs.map
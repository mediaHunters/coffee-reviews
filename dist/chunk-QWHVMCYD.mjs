import {
  Coffee
} from "./chunk-RDTFPORB.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";

// src/infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain.ts
var CoffeeEntityToCoffeeDomain = () => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      Coffee
    );
  }
});

export {
  CoffeeEntityToCoffeeDomain
};
//# sourceMappingURL=chunk-QWHVMCYD.mjs.map
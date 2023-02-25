import {
  Coffee
} from "./chunk-DL5VBO5D.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/mappings/Coffee/CoffeEntityToCoffeeDomain.ts
var CoffeeEntityToCoffeeDomain = /* @__PURE__ */ __name(() => ({
  configureMapping(mapper) {
    mapper.createMap(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY
      },
      Coffee
    );
  }
}), "CoffeeEntityToCoffeeDomain");

export {
  CoffeeEntityToCoffeeDomain
};
//# sourceMappingURL=chunk-VE7WGU6D.mjs.map
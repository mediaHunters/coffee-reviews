import {
  Coffee
} from "./chunk-WAAZK5KM.mjs";

// src/infrastructure/database/fixtures/factories/CoffeeFactory.ts
import { define } from "typeorm-seeding";
var coffeeDefined = new Coffee();
define(Coffee, () => {
  coffeeDefined.CoffeeStatus = "VERIFIED";
  coffeeDefined.brand = "Lavacca";
  coffeeDefined.burntLvl = "LIGHT_ROAST";
  coffeeDefined.createdAt = /* @__PURE__ */ new Date();
  coffeeDefined.description = "Lore ipusm do lor";
  coffeeDefined.imgUrl = "http://dumm-url.png";
  coffeeDefined.name = "sample coffee name";
  coffeeDefined.reflink = "http://another-dumb-link.com";
  return coffeeDefined;
});

export {
  coffeeDefined
};
//# sourceMappingURL=chunk-YR7WXAJ2.mjs.map
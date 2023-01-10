import { define } from 'typeorm-seeding';

import { Coffee } from 'infrastructure/database/entities/Coffee';

export const coffeeDefined = new Coffee();

define(Coffee, () => {
  coffeeDefined.CoffeeStatus = 'VERIFIED';
  coffeeDefined.brand = 'Lavacca';
  coffeeDefined.burntLvl = 'LIGHT_ROAST';
  coffeeDefined.createdAt = new Date();
  coffeeDefined.description = 'Lore ipusm do lor';
  coffeeDefined.imgUrl = 'http://dumm-url.png';
  coffeeDefined.name = 'sample coffee name';
  coffeeDefined.reflink = 'http://another-dumb-link.com';

  return coffeeDefined;
});

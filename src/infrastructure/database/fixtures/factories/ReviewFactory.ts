import { define } from 'typeorm-seeding';

import { Review } from 'infrastructure/database/entities/Review';
import { coffeeDefined } from 'infrastructure/database/fixtures/factories/CoffeeFactory';

define(Review, () => {
  const review = new Review();

  review.coffee = coffeeDefined;
  review.rating = 4;
  review.userId = 'ewjoij12l;1@#EWQ';

  return review;
});

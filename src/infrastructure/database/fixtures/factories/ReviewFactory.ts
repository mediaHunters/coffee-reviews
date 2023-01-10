import { define } from 'typeorm-seeding';

import { Review } from 'infrastructure/database/entities/Review';
import { coffeeDefined } from 'infrastructure/database/fixtures/factories/CoffeeFactory';
import { userDefined } from 'infrastructure/database/fixtures/factories/UserFactory';

define(Review, () => {
  const review = new Review();

  review.coffee = coffeeDefined;
  review.rating = 4;
  review.user = userDefined;

  return review;
});

import { define } from 'typeorm-seeding';
import { hashSync } from 'bcrypt';
import * as Faker from 'faker';

import { User } from 'infrastructure/database/entities/User';

const SALT = 10;
const RANDOM_NUMBER_SIZE = 100;
export const userDefined = new User();

define(User, (faker: typeof Faker) => {
  const counter = faker.random.number(RANDOM_NUMBER_SIZE);

  userDefined.email = `cr_user__${counter}@example.com`;
  userDefined.lastName = faker.name.lastName(counter);
  userDefined.firstName = faker.name.firstName();
  userDefined.password = hashSync('reer23EDQ@#', SALT);

  return userDefined;
});

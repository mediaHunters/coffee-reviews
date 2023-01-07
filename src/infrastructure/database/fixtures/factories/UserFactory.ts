import { define } from 'typeorm-seeding';
import { hashSync } from 'bcrypt';
import * as Faker from 'faker';

import { User } from 'infrastructure/database/entities/User';

const SALT = 10;
const RANDOM_NUMBER_SIZE = 100;

define(User, (faker: typeof Faker) => {
  const counter = faker.random.number(RANDOM_NUMBER_SIZE);
  const user = new User();

  user.email = `cr_user__${counter}@example.com`;
  user.lastName = faker.name.lastName(counter);
  user.firstName = faker.name.firstName();
  user.password = hashSync('reer23EDQ@#', SALT);

  return user;
});

import {
  User
} from "../../../../chunk-TXHLZ6OS.mjs";
import "../../../../chunk-KSFPCLC2.mjs";
import "../../../../chunk-VSL3XMPJ.mjs";
import "../../../../chunk-IV6S7MV4.mjs";

// src/infrastructure/database/fixtures/factories/UserFactory.ts
import { define } from "typeorm-seeding";
import { hashSync } from "bcrypt";
var SALT = 10;
var RANDOM_NUMBER_SIZE = 100;
var userDefined = new User();
define(User, (faker) => {
  const counter = faker.random.number(RANDOM_NUMBER_SIZE);
  userDefined.email = `cr_user__${counter}@example.com`;
  userDefined.lastName = faker.name.lastName(counter);
  userDefined.firstName = faker.name.firstName();
  userDefined.password = hashSync("reer23EDQ@#", SALT);
  return userDefined;
});
export {
  userDefined
};
//# sourceMappingURL=UserFactory.mjs.map
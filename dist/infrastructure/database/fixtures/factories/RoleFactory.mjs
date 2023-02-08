import {
  Role
} from "../../../../chunk-B6QVOMBV.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-JXCWUIPY.mjs";
import "../../../../chunk-CT3ESYKG.mjs";

// src/infrastructure/database/fixtures/factories/RoleFactory.ts
import { define } from "typeorm-seeding";
define(Role, (faker) => {
  const role = new Role();
  role.name = faker.random.arrayElement(["ADMIN" /* ADMIN */, "MEMBER" /* MEMBER */]);
  return role;
});
//# sourceMappingURL=RoleFactory.mjs.map
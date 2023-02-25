import {
  Role
} from "../../../../chunk-3C5KPKXZ.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-YM6N2TQQ.mjs";
import "../../../../chunk-RIQVZG47.mjs";
import "../../../../chunk-C22X3M6A.mjs";

// src/infrastructure/database/fixtures/factories/RoleFactory.ts
import { define } from "typeorm-seeding";
define(Role, (faker) => {
  const role = new Role();
  role.name = faker.random.arrayElement(["ADMIN" /* ADMIN */, "MEMBER" /* MEMBER */]);
  return role;
});
//# sourceMappingURL=RoleFactory.mjs.map
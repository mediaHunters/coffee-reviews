import {
  Role
} from "../../../../chunk-W4O4A6XN.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-KSFPCLC2.mjs";
import "../../../../chunk-VSL3XMPJ.mjs";
import "../../../../chunk-IV6S7MV4.mjs";

// src/infrastructure/database/fixtures/factories/RoleFactory.ts
import { define } from "typeorm-seeding";
define(Role, (faker) => {
  const role = new Role();
  role.name = faker.random.arrayElement(["ADMIN" /* ADMIN */, "MEMBER" /* MEMBER */]);
  return role;
});
//# sourceMappingURL=RoleFactory.mjs.map
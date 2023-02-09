import {
  User
} from "../../../../chunk-TXHLZ6OS.mjs";
import {
  Role
} from "../../../../chunk-W4O4A6XN.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-KSFPCLC2.mjs";
import "../../../../chunk-VSL3XMPJ.mjs";
import "../../../../chunk-IV6S7MV4.mjs";

// src/infrastructure/database/fixtures/seeds/UserSeed.ts
var UserSeed = class {
  async run(factory) {
    await this.prepareAdminUserSeeds(factory);
    await this.prepareMemberUserSeeds(factory);
  }
  async prepareAdminUserSeeds(factory) {
    const adminRole = await factory(Role)().create({
      name: "ADMIN" /* ADMIN */
    });
    await factory(User)().create({
      email: "admin@example.com",
      role: adminRole,
      nickname: "nick admin"
    });
  }
  async prepareMemberUserSeeds(factory) {
    const memberRole = await factory(Role)().create({
      name: "MEMBER" /* MEMBER */
    });
    await factory(User)().create({
      email: "user@example.com",
      role: memberRole,
      nickname: "sample_nick"
    });
  }
};
export {
  UserSeed
};
//# sourceMappingURL=UserSeed.mjs.map
import {
  User
} from "../../../../chunk-FAMYIBZW.mjs";
import {
  Role
} from "../../../../chunk-B6QVOMBV.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-JXCWUIPY.mjs";
import "../../../../chunk-CT3ESYKG.mjs";

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
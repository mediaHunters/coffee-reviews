import {
  User
} from "../../../../chunk-IOQQNHD2.mjs";
import {
  Role
} from "../../../../chunk-3C5KPKXZ.mjs";
import "../../../../chunk-5MUR4BWO.mjs";
import "../../../../chunk-YM6N2TQQ.mjs";
import "../../../../chunk-RIQVZG47.mjs";
import {
  __name
} from "../../../../chunk-C22X3M6A.mjs";

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
__name(UserSeed, "UserSeed");
export {
  UserSeed
};
//# sourceMappingURL=UserSeed.mjs.map
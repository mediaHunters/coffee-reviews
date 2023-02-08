"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/infrastructure/database/fixtures/seeds/UserSeed.ts
var UserSeed_exports = {};
__export(UserSeed_exports, {
  UserSeed: () => UserSeed
});
module.exports = __toCommonJS(UserSeed_exports);

// src/infrastructure/database/entities/User.ts
var import_typeorm2 = require("typeorm");

// src/infrastructure/database/entities/Base.ts
var import_typeorm = require("typeorm");
var Model = class extends import_typeorm.BaseEntity {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/User.ts
var User = class extends Model {
  toJson() {
    return {
      ...this,
      password: void 0
    };
  }
};
__decorateClass([
  (0, import_typeorm2.Column)("text", {
    nullable: true
  })
], User.prototype, "firstName", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", {
    nullable: true
  })
], User.prototype, "lastName", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", { unique: true })
], User.prototype, "nickname", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("Role", (role) => role.user)
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)("Review", (review) => review.user)
], User.prototype, "reviews", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)()
], User);

// src/infrastructure/database/entities/Role.ts
var import_typeorm3 = require("typeorm");

// src/infrastructure/database/enum/UserRole.ts
var USER_ROLE = /* @__PURE__ */ ((USER_ROLE2) => {
  USER_ROLE2["ADMIN"] = "ADMIN";
  USER_ROLE2["MEMBER"] = "MEMBER";
  return USER_ROLE2;
})(USER_ROLE || {});

// src/infrastructure/database/entities/Role.ts
var Role = class extends Model {
};
__decorateClass([
  (0, import_typeorm3.Column)({
    default: "MEMBER" /* MEMBER */,
    enum: USER_ROLE,
    nullable: false,
    type: "enum"
  })
], Role.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)("User", (user) => user.role)
], Role.prototype, "user", 2);
Role = __decorateClass([
  (0, import_typeorm3.Entity)()
], Role);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSeed
});
//# sourceMappingURL=UserSeed.js.map
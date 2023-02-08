"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/infrastructure/database/fixtures/factories/RoleFactory.ts
var import_typeorm_seeding = require("typeorm-seeding");

// src/infrastructure/database/entities/Role.ts
var import_typeorm2 = require("typeorm");

// src/infrastructure/database/enum/UserRole.ts
var USER_ROLE = /* @__PURE__ */ ((USER_ROLE2) => {
  USER_ROLE2["ADMIN"] = "ADMIN";
  USER_ROLE2["MEMBER"] = "MEMBER";
  return USER_ROLE2;
})(USER_ROLE || {});

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

// src/infrastructure/database/entities/Role.ts
var Role = class extends Model {
};
__decorateClass([
  (0, import_typeorm2.Column)({
    default: "MEMBER" /* MEMBER */,
    enum: USER_ROLE,
    nullable: false,
    type: "enum"
  })
], Role.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)("User", (user) => user.role)
], Role.prototype, "user", 2);
Role = __decorateClass([
  (0, import_typeorm2.Entity)()
], Role);

// src/infrastructure/database/fixtures/factories/RoleFactory.ts
(0, import_typeorm_seeding.define)(Role, (faker) => {
  const role = new Role();
  role.name = faker.random.arrayElement(["ADMIN" /* ADMIN */, "MEMBER" /* MEMBER */]);
  return role;
});
//# sourceMappingURL=RoleFactory.js.map
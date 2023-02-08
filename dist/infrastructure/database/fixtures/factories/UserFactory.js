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

// src/infrastructure/database/fixtures/factories/UserFactory.ts
var UserFactory_exports = {};
__export(UserFactory_exports, {
  userDefined: () => userDefined
});
module.exports = __toCommonJS(UserFactory_exports);
var import_typeorm_seeding = require("typeorm-seeding");
var import_bcrypt = require("bcrypt");

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

// src/infrastructure/database/fixtures/factories/UserFactory.ts
var SALT = 10;
var RANDOM_NUMBER_SIZE = 100;
var userDefined = new User();
(0, import_typeorm_seeding.define)(User, (faker) => {
  const counter = faker.random.number(RANDOM_NUMBER_SIZE);
  userDefined.email = `cr_user__${counter}@example.com`;
  userDefined.lastName = faker.name.lastName(counter);
  userDefined.firstName = faker.name.firstName();
  userDefined.password = (0, import_bcrypt.hashSync)("reer23EDQ@#", SALT);
  return userDefined;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userDefined
});
//# sourceMappingURL=UserFactory.js.map
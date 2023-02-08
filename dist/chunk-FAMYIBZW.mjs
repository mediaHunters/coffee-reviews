import {
  Model
} from "./chunk-JXCWUIPY.mjs";
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/entities/User.ts
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
var User = class extends Model {
  toJson() {
    return {
      ...this,
      password: void 0
    };
  }
};
__decorateClass([
  Column("text", {
    nullable: true
  })
], User.prototype, "firstName", 2);
__decorateClass([
  Column("text", {
    nullable: true
  })
], User.prototype, "lastName", 2);
__decorateClass([
  Column("text", { unique: true })
], User.prototype, "nickname", 2);
__decorateClass([
  Column("text")
], User.prototype, "email", 2);
__decorateClass([
  Column("text")
], User.prototype, "password", 2);
__decorateClass([
  ManyToOne("Role", (role) => role.user)
], User.prototype, "role", 2);
__decorateClass([
  OneToMany("Review", (review) => review.user)
], User.prototype, "reviews", 2);
User = __decorateClass([
  Entity()
], User);

export {
  User
};
//# sourceMappingURL=chunk-FAMYIBZW.mjs.map
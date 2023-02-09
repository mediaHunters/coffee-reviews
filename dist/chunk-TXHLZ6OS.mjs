import {
  Model
} from "./chunk-KSFPCLC2.mjs";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  init_typeorm
} from "./chunk-VSL3XMPJ.mjs";
import {
  __decorateClass
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/entities/User.ts
init_typeorm();
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
//# sourceMappingURL=chunk-TXHLZ6OS.mjs.map
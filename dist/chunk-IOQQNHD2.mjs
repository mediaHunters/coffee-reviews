import {
  Model
} from "./chunk-YM6N2TQQ.mjs";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(User, "User");
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
//# sourceMappingURL=chunk-IOQQNHD2.mjs.map
import {
  USER_ROLE
} from "./chunk-5MUR4BWO.mjs";
import {
  Model
} from "./chunk-YM6N2TQQ.mjs";
import {
  Column,
  Entity,
  OneToMany,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/entities/Role.ts
init_typeorm();
var Role = class extends Model {
};
__name(Role, "Role");
__decorateClass([
  Column({
    default: "MEMBER" /* MEMBER */,
    enum: USER_ROLE,
    nullable: false,
    type: "enum"
  })
], Role.prototype, "name", 2);
__decorateClass([
  OneToMany("User", (user) => user.role)
], Role.prototype, "user", 2);
Role = __decorateClass([
  Entity()
], Role);

export {
  Role
};
//# sourceMappingURL=chunk-3C5KPKXZ.mjs.map
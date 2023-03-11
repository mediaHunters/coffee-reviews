import {
  USER_ROLE
} from "./chunk-5MUR4BWO.mjs";
import {
  Model
} from "./chunk-KSFPCLC2.mjs";
import {
  Column,
  Entity,
  OneToMany,
  init_typeorm
} from "./chunk-VSL3XMPJ.mjs";
import {
  __decorateClass
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/entities/Role.ts
init_typeorm();
var Role = class extends Model {
};
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
//# sourceMappingURL=chunk-W4O4A6XN.mjs.map
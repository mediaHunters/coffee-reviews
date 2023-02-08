import {
  USER_ROLE
} from "./chunk-5MUR4BWO.mjs";
import {
  Model
} from "./chunk-JXCWUIPY.mjs";
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/entities/Role.ts
import { Column, Entity, OneToMany } from "typeorm";
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
//# sourceMappingURL=chunk-B6QVOMBV.mjs.map
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/entities/Base.ts
import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity
} from "typeorm";
var Model = class extends BaseEntity {
};
__decorateClass([
  PrimaryGeneratedColumn("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  CreateDateColumn()
], Model.prototype, "createdAt", 2);
__decorateClass([
  UpdateDateColumn()
], Model.prototype, "updatedAt", 2);

export {
  Model
};
//# sourceMappingURL=chunk-JXCWUIPY.mjs.map
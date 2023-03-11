import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  init_typeorm
} from "./chunk-VSL3XMPJ.mjs";
import {
  __decorateClass
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/entities/Base.ts
init_typeorm();
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
//# sourceMappingURL=chunk-KSFPCLC2.mjs.map
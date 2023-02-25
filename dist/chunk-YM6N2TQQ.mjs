import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/entities/Base.ts
init_typeorm();
var Model = class extends BaseEntity {
};
__name(Model, "Model");
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
//# sourceMappingURL=chunk-YM6N2TQQ.mjs.map
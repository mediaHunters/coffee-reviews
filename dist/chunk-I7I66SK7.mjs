import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/orm/CROrm.ts
import { injectable } from "inversify";
import { createConnection } from "typeorm";
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository
} from "typeorm-transactional-cls-hooked";
var CROrm = class {
  async initialize() {
    await createConnection(process.env.ORM_CONNECTION || "");
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();
  }
};
CROrm = __decorateClass([
  injectable()
], CROrm);

export {
  CROrm
};
//# sourceMappingURL=chunk-I7I66SK7.mjs.map
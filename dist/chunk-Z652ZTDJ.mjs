import {
  ormconfig_default
} from "./chunk-SNX4YINT.mjs";
import {
  createConnection,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/orm/CROrm.ts
init_typeorm();
import { injectable } from "inversify";
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository
} from "typeorm-transactional-cls-hooked";
var CROrm = class {
  async initialize() {
    await createConnection(ormconfig_default);
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();
  }
};
__name(CROrm, "CROrm");
CROrm = __decorateClass([
  injectable()
], CROrm);

export {
  CROrm
};
//# sourceMappingURL=chunk-Z652ZTDJ.mjs.map
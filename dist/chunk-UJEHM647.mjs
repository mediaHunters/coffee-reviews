import {
  createConnection,
  init_typeorm
} from "./chunk-VSL3XMPJ.mjs";
import {
  __decorateClass
} from "./chunk-IV6S7MV4.mjs";

// src/infrastructure/database/orm/CROrm.ts
init_typeorm();
import { injectable } from "inversify";
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository
} from "typeorm-transactional-cls-hooked";
var dir = process.env.NODE_ENV === "development" ? "src" : "dist";
var ext = process.env.NODE_ENV === "development" ? "t" : "j";
var CROrm = class {
  async initialize() {
    await createConnection("default");
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
//# sourceMappingURL=chunk-UJEHM647.mjs.map
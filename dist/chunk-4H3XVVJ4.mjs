import {
  UIMapper
} from "./chunk-K2TBMOCK.mjs";
import {
  DBMapper
} from "./chunk-OQLFMI3P.mjs";
import {
  CROrm
} from "./chunk-Z652ZTDJ.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DATABASE_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  UI_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/dependency/common/CommonModule.ts
var CommonModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideOrm(bind);
    this.provideDBMapper(bind);
    this.provideUIMapper(bind);
  }
  provideUIMapper(bind) {
    bind(UI_IDENTIFIERS.UI_MAPPER).to(UIMapper);
  }
  provideDBMapper(bind) {
    bind(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER).to(DBMapper);
  }
  provideOrm(bind) {
    bind(DATABASE_IDENTIFIERS.ORM).to(CROrm);
  }
};
__name(CommonModule, "CommonModule");

export {
  CommonModule
};
//# sourceMappingURL=chunk-4H3XVVJ4.mjs.map
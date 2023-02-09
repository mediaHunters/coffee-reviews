import {
  DBMapper
} from "./chunk-JTCOZVH6.mjs";
import {
  CROrm
} from "./chunk-UJEHM647.mjs";
import {
  UIMapper
} from "./chunk-2VBYS3HI.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  UI_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  DATABASE_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";

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

export {
  CommonModule
};
//# sourceMappingURL=chunk-CRDUVCFD.mjs.map
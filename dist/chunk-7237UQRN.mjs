import {
  CoffeeRepository
} from "./chunk-H4FX6FYW.mjs";
import {
  CoffeeUnitOfWork
} from "./chunk-YCF6IIFP.mjs";
import {
  CoffeeService
} from "./chunk-NVBDNSN5.mjs";
import {
  BaseModule
} from "./chunk-T62UMP5Y.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/dependency/shared/Coffee/CoffeeModule.ts
var CoffeeModule = class extends BaseModule {
  constructor() {
    super((bind) => {
      this.init(bind);
    });
  }
  init(bind) {
    this.provideCoffeeService(bind);
    this.provideCoffeeRepository(bind);
    this.provideCoffeeUnitOfWork(bind);
  }
  provideCoffeeService(bind) {
    bind(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE
    ).to(CoffeeService);
  }
  provideCoffeeRepository(bind) {
    bind(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY).to(
      CoffeeRepository
    );
  }
  provideCoffeeUnitOfWork(bind) {
    bind(
      DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK
    ).to(CoffeeUnitOfWork);
  }
};
__name(CoffeeModule, "CoffeeModule");

export {
  CoffeeModule
};
//# sourceMappingURL=chunk-7237UQRN.mjs.map
import {
  CoffeeRepository
} from "./chunk-3ICYLAAJ.mjs";
import {
  CoffeeUnitOfWork
} from "./chunk-ZWLPZ7ZS.mjs";
import {
  CoffeeService
} from "./chunk-LQ42ZIS4.mjs";
import {
  BaseModule
} from "./chunk-5UD35LCP.mjs";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";

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

export {
  CoffeeModule
};
//# sourceMappingURL=chunk-CMX5GW5W.mjs.map
import { interfaces } from 'inversify';

import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS,
} from 'core/CoreModuleSymbols';
import { BaseModule } from 'dependency/BaseModule';
import { ICoffeeService } from 'core/applicationServices/Coffee/ICoffeeService';
import { CoffeeService } from 'core/applicationServices/Coffee/CoffeeService';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { CoffeeRepository } from 'infrastructure/database/repository/Coffee/CoffeeRepository';
import { ICoffeeUnitOfWork } from 'core/domainServices/Coffee/ICoffeeUnitOfWork';
import { CoffeeUnitOfWork } from 'infrastructure/database/repository/Coffee/CoffeeUnitOfWork';

export class CoffeeModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideCoffeeService(bind);
    this.provideCoffeeRepository(bind);
    this.provideCoffeeUnitOfWork(bind);
  }

  private provideCoffeeService(bind: interfaces.Bind) {
    bind<ICoffeeService>(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE
    ).to(CoffeeService);
  }

  private provideCoffeeRepository(bind: interfaces.Bind) {
    bind<ICoffeeRepository>(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY).to(
      CoffeeRepository
    );
  }

  private provideCoffeeUnitOfWork(bind: interfaces.Bind) {
    bind<ICoffeeUnitOfWork>(
      DOMAIN_UNIT_OF_WORK_IDENTIFIERS.COFFEE_UNIT_OF_WORK
    ).to(CoffeeUnitOfWork);
  }
}

import { interfaces } from 'inversify';

import { DOMAIN_REPOSITORY_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { IRoleRepository } from 'core/domainServices/Role/IRoleRepository';
import { BaseModule } from 'dependency/BaseModule';
import { RoleRepository } from 'infrastructure/database/repository/role/RoleRepository';

export class RoleModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideRoleRepository(bind);
  }

  public provideRoleRepository(bind: interfaces.Bind): void {
    bind<IRoleRepository>(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY).to(
      RoleRepository
    );
  }
}

import { interfaces } from 'inversify';

import { BaseModule } from 'dependency/BaseModule';

import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import { CROrm } from 'infrastructure/database/orm/CROrm';
import { IOrm } from 'infrastructure/database/orm/IOrm';

import {
  DATABASE_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';

import { UIMapper } from 'ui/common/mappings/UIMapper';
import { UI_IDENTIFIERS } from 'ui/UIModuleSymbols';
import { BunnyCdn } from 'infrastructure/cdn/BunnyCdn';

export class CommonModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideOrm(bind);
    this.provideBunnyCdn(bind);

    this.provideDBMapper(bind);
    this.provideUIMapper(bind);
  }

  private provideUIMapper(bind: interfaces.Bind): void {
    bind<UIMapper>(UI_IDENTIFIERS.UI_MAPPER).to(UIMapper);
  }

  private provideDBMapper(bind: interfaces.Bind): void {
    bind<DBMapper>(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER).to(DBMapper);
  }

  private provideBunnyCdn(bind: interfaces.Bind): void {
    bind<BunnyCdn>(INFRASTRUCTURE_IDENTIFIERS.BUNNY_CDN).to(BunnyCdn);
  }

  private provideOrm(bind: interfaces.Bind): void {
    bind<IOrm>(DATABASE_IDENTIFIERS.ORM).to(CROrm);
  }
}

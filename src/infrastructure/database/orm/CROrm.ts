import { injectable } from 'inversify';
import { createConnection } from 'typeorm';

import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { IOrm } from 'infrastructure/database/orm/IOrm';

@injectable()
export class CROrm implements IOrm {
  public async initialize(): Promise<void> {
    await createConnection('default');

    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();
  }
}

import { injectable } from 'inversify';
import { createConnection } from 'typeorm';

import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

import { IOrm } from 'infrastructure/database/orm/IOrm';

const dir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';
const ext = process.env.NODE_ENV === 'development' ? 't' : 'j';

@injectable()
export class CROrm implements IOrm {
  public async initialize(): Promise<void> {
    await createConnection('default');

    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();
  }
}

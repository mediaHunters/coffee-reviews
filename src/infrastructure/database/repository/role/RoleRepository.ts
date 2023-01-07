import { inject, injectable } from 'inversify';

import { EntityRepository } from 'typeorm';

import { FindRoleRepositoryQuery } from 'core/domainServices/Role/requests/repository/query/FindRoleRepositoryQuery';
import { IRoleRepository } from 'core/domainServices/Role/IRoleRepository';

import { Role } from 'core/domain/Role/Role';
import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { BaseError } from 'core/common/errors/BaseError';

import { Role as RoleEntity } from 'infrastructure/database/entities/Role';
import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';
import { Repository } from 'infrastructure/database/repository/common/Repository';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';
import { FindRoleByNameRepositoryQuery } from 'core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery';

@injectable()
@EntityRepository(RoleEntity)
export class RoleRepository
  extends Repository<RoleEntity>
  implements IRoleRepository
{
  constructor(
    @inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)
    private readonly dbMapper: DBMapper
  ) {
    super(RoleEntity);
  }

  async findRole({ id }: FindRoleRepositoryQuery): Promise<Role> {
    const role = await this.find(id);

    if (!role) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.ROLE_NOT_FOUND]
      );
    }

    return this.dbMapper.mapper.map<RoleEntity, Role>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY,
      },
      role
    );
  }

  async findRoleByName({ name }: FindRoleByNameRepositoryQuery): Promise<Role> {
    const role = await this.custom()
      .createQueryBuilder()
      .where('"Role"."name" = :name', {
        name,
      })
      .getOne();

    if (!role) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.ROLE_NOT_FOUND]
      );
    }

    return this.dbMapper.mapper.map<RoleEntity, Role>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY,
      },
      role
    );
  }
}

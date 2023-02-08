import {
  Role
} from "./chunk-B6QVOMBV.mjs";
import {
  Repository
} from "./chunk-WWH26BVW.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  BaseError
} from "./chunk-6TCJVVRE.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/repository/role/RoleRepository.ts
import { inject, injectable } from "inversify";
import { EntityRepository } from "typeorm";
var RoleRepository = class extends Repository {
  constructor(dbMapper) {
    super(Role);
    this.dbMapper = dbMapper;
  }
  async findRole({ id }) {
    const role = await this.find(id);
    if (!role) {
      throw new BaseError(
        InfrastructureErrors[2 /* ROLE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      role
    );
  }
  async findRoleByName({ name }) {
    const role = await this.custom().createQueryBuilder().where('"Role"."name" = :name', {
      name
    }).getOne();
    if (!role) {
      throw new BaseError(
        InfrastructureErrors[2 /* ROLE_NOT_FOUND */]
      );
    }
    return this.dbMapper.mapper.map(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.ROLE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.ROLE_ENTITY
      },
      role
    );
  }
};
RoleRepository = __decorateClass([
  injectable(),
  EntityRepository(Role),
  __decorateParam(0, inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], RoleRepository);

export {
  RoleRepository
};
//# sourceMappingURL=chunk-UJOFCNHR.mjs.map
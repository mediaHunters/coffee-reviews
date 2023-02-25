import {
  Repository
} from "./chunk-HYGVCY55.mjs";
import {
  InfrastructureErrors
} from "./chunk-ENM6OMP3.mjs";
import {
  Role
} from "./chunk-3C5KPKXZ.mjs";
import {
  EntityRepository,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  DOMAIN_MAPPING_IDENTIFIERS
} from "./chunk-ZOCCYKEF.mjs";
import {
  __decorateClass,
  __decorateParam,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/repository/role/RoleRepository.ts
init_typeorm();
import { inject, injectable } from "inversify";
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
__name(RoleRepository, "RoleRepository");
RoleRepository = __decorateClass([
  injectable(),
  EntityRepository(Role),
  __decorateParam(0, inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER))
], RoleRepository);

export {
  RoleRepository
};
//# sourceMappingURL=chunk-53ZXZRXV.mjs.map
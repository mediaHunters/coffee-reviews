import { inject } from 'inversify';

import { hashSync } from 'bcrypt';

import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { IUserRepository } from 'core/domainServices/User/IUserRepository';
import {
  INFRASTRUCTURE_IDENTIFIERS,
  DATABASE_MAPPING_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';
import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import { User } from 'core/domain/User/User';
import { User as UserEntity } from 'infrastructure/database/entities/User';
import { AddUserRepositoryCommand } from 'core/domainServices/User/request/Repository/command/AddUserRepositoryCommand';
import { Repository } from 'infrastructure/database/repository/common/Repository';
import { Role } from 'infrastructure/database/entities/Role';
import { FindUserByEmailRepositoryQuery } from 'core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery';
import { GetUserRepositoryQuery } from 'core/domainServices/User/request/Repository/query/GetUserRepositoryQuery';
import { DeleteUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';
import { BaseError } from 'core/common/errors/BaseError';
import { CheckIfUserAlreadyExistsRepositoryQuery } from 'core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery';

export class UserRepository
  extends Repository<UserEntity>
  implements IUserRepository
{
  constructor(
    @inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)
    private readonly dbMapper: DBMapper
  ) {
    super(UserEntity);
  }

  async addUser({
    nickname,
    email,
    password,
    roleId,
  }: AddUserRepositoryCommand): Promise<User> {
    const user = new UserEntity();

    user.nickname = nickname;
    user.email = email;
    user.password = hashSync(password, 10);

    const memberRole = new Role();
    memberRole.id = roleId;
    user.role = memberRole;

    const savedUser = await this.save(user);

    return this.dbMapper.mapper.map<UserEntity, User>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      savedUser
    );
  }

  async removeUser({
    id,
  }: DeleteUserUnitOfWorkRepositoryCommand): Promise<User> {
    const result = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'Role')
      .where('User.id = :id ', { id })
      .getOne();

    if (!result) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.USER_NOT_FOUND]
      );
    }

    await this.remove(result);

    return this.dbMapper.mapper.map<UserEntity, User>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      result
    );
  }

  async findUserByEmail({
    email,
  }: FindUserByEmailRepositoryQuery): Promise<User> {
    const result = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'role')
      .where('User.email = :email', { email })
      .getMany();

    return this.dbMapper.mapper.map<UserEntity, User>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      result[0]
    );
  }

  async getUser({ id }: GetUserRepositoryQuery): Promise<User> {
    const result = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'Role')
      .where('User.id = :id ', { id })
      .getOne();

    if (!result) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.USER_NOT_FOUND]
      );
    }

    return this.dbMapper.mapper.map<UserEntity, User>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      result
    );
  }

  async getUsers(): Promise<User[]> {
    const users = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'role')
      .getMany();

    return this.dbMapper.mapper.map<UserEntity[], User[]>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      users
    );
  }

  async checkIfUserAlreadyExists({
    nickname,
    email,
  }: CheckIfUserAlreadyExistsRepositoryQuery): Promise<User[]> {
    const result = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'role')
      .where('User.nickname = :nickname OR User.email = :email', {
        nickname,
        email,
      })
      .getMany();

    return this.dbMapper.mapper.map<UserEntity[], User[]>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.USER_ENTITY,
      },
      result
    );
  }
}

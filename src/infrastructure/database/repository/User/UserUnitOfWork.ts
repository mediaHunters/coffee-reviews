import { inject, injectable } from 'inversify';

import { DOMAIN_REPOSITORY_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { User } from 'core/domain/User/User';
import { IUserRepository } from 'core/domainServices/User/IUserRepository';
import { IUserUnitOfWork } from 'core/domainServices/User/IUserUnitOfWork';
import { AddUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand';
import { DeleteUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand';
import { FindRoleByNameRepositoryQuery } from 'core/domainServices/Role/requests/repository/query/FindRoleByNameRepositoryQuery';
import { AddUserRepositoryCommand } from 'core/domainServices/User/request/Repository/command/AddUserRepositoryCommand';
import { IRoleRepository } from 'core/domainServices/Role/IRoleRepository';

import { USER_ROLE } from 'infrastructure/database/enum/UserRole';
import { CheckIfUserAlreadyExistsRepositoryQuery } from 'core/domainServices/User/request/Repository/query/CheckIfUserAlreadyExistsRepositoryQuery';
import { BaseError } from 'core/common/errors/BaseError';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';

@injectable()
export class UserUnitOfWork implements IUserUnitOfWork {
  constructor(
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.ROLE_REPOSITORY)
    private readonly roleRepository: IRoleRepository
  ) {}

  async addUser({
    email,
    password,
    nickname,
  }: AddUserUnitOfWorkRepositoryCommand): Promise<User> {
    const checkIfUserExist = await this.userRepository.checkIfUserAlreadyExists(
      new CheckIfUserAlreadyExistsRepositoryQuery(nickname, email)
    );

    if (checkIfUserExist.length > 0) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.USER_ALREADY_EXIST]
      );
    }
    const { id } = await this.roleRepository.findRoleByName(
      new FindRoleByNameRepositoryQuery(USER_ROLE.MEMBER)
    );
    return this.userRepository.addUser(
      new AddUserRepositoryCommand(nickname, email, password, id)
    );
  }

  deleteUser(command: DeleteUserUnitOfWorkRepositoryCommand): Promise<User> {
    return this.userRepository.removeUser(command);
  }
}

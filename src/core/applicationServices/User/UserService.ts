import { inject, injectable } from 'inversify';

import { GetUserRepositoryQuery } from 'core/domainServices/User/request/Repository/query/GetUserRepositoryQuery';
import { IUserService } from 'core/applicationServices/User/IUserService';
import { FetchUserQuery } from 'core/applicationServices/User/requests/query/FetchUserQuery';
import { User } from 'core/domain/User/User';
import { IUserRepository } from 'core/domainServices/User/IUserRepository';

import { GetUsersRepositoryQuery } from 'core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery';
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS,
} from 'core/CoreModuleSymbols';
import { RemoveUserCommand } from 'core/applicationServices/User/requests/command/RemoveUserCommand';
import { IUserUnitOfWork } from 'core/domainServices/User/IUserUnitOfWork';
import { DeleteUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)
    private readonly userUnitOfWork: IUserUnitOfWork
  ) {}

  removeUser({ id }: RemoveUserCommand): Promise<User> {
    return this.userUnitOfWork.deleteUser(
      new DeleteUserUnitOfWorkRepositoryCommand(id)
    );
  }

  fetchUser({ id }: FetchUserQuery): Promise<User> {
    return this.userRepository.getUser(new GetUserRepositoryQuery(id));
  }

  fetchUsers(): Promise<User[]> {
    return this.userRepository.getUsers(new GetUsersRepositoryQuery());
  }
}

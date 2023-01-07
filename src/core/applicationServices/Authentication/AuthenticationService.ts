import { inject, injectable } from 'inversify';

import { compare } from 'bcrypt';

import {
  DOMAIN_REPOSITORY_IDENTIFIERS,
  DOMAIN_UNIT_OF_WORK_IDENTIFIERS,
} from 'core/CoreModuleSymbols';

import { IAuthenticationService } from 'core/applicationServices/Authentication/IAuthenticationService';
import { IUserUnitOfWork } from 'core/domainServices/User/IUserUnitOfWork';
import { User } from 'core/domain/User/User';
import { AddUserUnitOfWorkRepositoryCommand } from 'core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand';
import { SignUpCommand } from 'core/applicationServices/Authentication/requests/repository/command/SignUpCommand';

import { AuthenticationQuery } from 'core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery';
import { IUserRepository } from 'core/domainServices/User/IUserRepository';
import { FindUserByEmailRepositoryQuery } from 'core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery';

@injectable()
export class AuthenticationService implements IAuthenticationService {
  constructor(
    @inject(DOMAIN_UNIT_OF_WORK_IDENTIFIERS.USER_UNIT_OF_WORK)
    private readonly userUnitOfWork: IUserUnitOfWork,
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  signUp({ nickname, email, password }: SignUpCommand): Promise<User> {
    return this.userUnitOfWork.addUser(
      new AddUserUnitOfWorkRepositoryCommand(email, password, nickname)
    );
  }

  async verifyCredentials({
    email,
    password,
  }: AuthenticationQuery): Promise<User | undefined> {
    const user = await this.userRepository.findUserByEmail(
      new FindUserByEmailRepositoryQuery(email)
    );

    if (!user || !(await compare(password, user?.password || ''))) {
      return undefined;
    }

    return user;
  }
}

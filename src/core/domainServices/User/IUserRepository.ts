import { User } from "core/domain/User/User";
import { AddUserRepositoryCommand } from "core/domainServices/Role/requests/repository/command/AddUserRepositoryCommand";
import { FindUserByEmailRepositoryQuery } from "core/domainServices/User/request/Repository/query/FindUserByEmailRepositoryQuery";
import { GetUserRepositoryQuery } from "core/domainServices/User/request/Repository/query/GetUserRepositoryQuery";
import { GetUsersRepositoryQuery } from "core/domainServices/User/request/Repository/query/GetUsersRepositoryQuery";
import { DeleteUserUnitOfWorkRepositoryCommand } from "core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand";

export interface IUserRepository {
  getUsers(request: GetUsersRepositoryQuery): Promise<User[]>;
  findUserByEmail(request: FindUserByEmailRepositoryQuery): Promise<User>;
  getUser(request: GetUserRepositoryQuery): Promise<User>;
  addUser(command: AddUserRepositoryCommand): Promise<User>;
  removeUser(command: DeleteUserUnitOfWorkRepositoryCommand): Promise<User>;
}

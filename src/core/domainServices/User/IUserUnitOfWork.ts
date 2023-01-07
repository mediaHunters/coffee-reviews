import { User } from "core/domain/User/User";
import { AddUserUnitOfWorkRepositoryCommand } from "core/domainServices/User/request/UnitOfWorkRepository/command/AddUserUnitOfWorkRepositoryCommand";
import { DeleteUserUnitOfWorkRepositoryCommand } from "core/domainServices/User/request/UnitOfWorkRepository/command/DeleteUserUnitOfWorkRepositoryCommand";

export interface IUserUnitOfWork {
  addUser(request: AddUserUnitOfWorkRepositoryCommand): Promise<User>;
  deleteUser(request: DeleteUserUnitOfWorkRepositoryCommand): Promise<User>;
}

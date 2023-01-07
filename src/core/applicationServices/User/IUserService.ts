import { RemoveUserCommand } from 'core/applicationServices/User/requests/command/RemoveUserCommand';
import { FetchUserQuery } from 'core/applicationServices/User/requests/query/FetchUserQuery';
import { User } from 'core/domain/User/User';

export interface IUserService {
  removeUser(command: RemoveUserCommand): Promise<User>;
  fetchUser(query: FetchUserQuery): Promise<User>;
  fetchUsers(): Promise<User[]>;
}

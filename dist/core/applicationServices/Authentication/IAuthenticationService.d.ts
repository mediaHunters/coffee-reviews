import { User } from '../../domain/User/User.js';
import { SignUpCommand } from './requests/repository/command/SignUpCommand.js';
import { AuthenticationQuery } from './requests/handler/query/AuthenticationQuery.js';

interface IAuthenticationService {
    signUp(request: SignUpCommand): Promise<User>;
    verifyCredentials(request: AuthenticationQuery): Promise<User | undefined>;
}

export { IAuthenticationService };

import { User } from "core/domain/User/User";
import { SignUpCommand } from "core/applicationServices/Authentication/requests/repository/command/SignUpCommand";
import { AuthenticationQuery } from "core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery";

export interface IAuthenticationService {
  signUp(request: SignUpCommand): Promise<User>;
  verifyCredentials(request: AuthenticationQuery): Promise<User | undefined>;
}

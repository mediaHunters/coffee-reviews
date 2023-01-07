import { AuthenticationQuery } from 'core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery';
import { Authentication } from 'ui/common/config/application/common/auth/models/Authentication';

export interface IAuthenticationHandler {
  authenticate(request: AuthenticationQuery): Promise<Authentication>;
}

import { AuthenticationQuery } from '../../../../../../core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.js';
import { Authentication } from './models/Authentication.js';
import '../../../../../../core/domain/User/User.js';

interface IAuthenticationHandler {
    authenticate(request: AuthenticationQuery): Promise<Authentication>;
}

export { IAuthenticationHandler };

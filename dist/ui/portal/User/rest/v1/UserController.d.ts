import { User } from '../../../../../core/domain/User/User.js';
import * as inversify_express_utils_lib_results from 'inversify-express-utils/lib/results';
import { BaseHttpController } from 'inversify-express-utils';
import { Request } from 'express';
import { IUserService } from '../../../../../core/applicationServices/User/IUserService.js';
import { RemoveUserCommandBody } from './requests/command/RemoveUserCommandBody.js';
import '../../../../../core/applicationServices/User/requests/command/RemoveUserCommand.js';
import '../../../../../core/applicationServices/User/requests/query/FetchUserQuery.js';

declare class UserController extends BaseHttpController {
    private readonly UserService;
    constructor(UserService: IUserService);
    get(): Promise<inversify_express_utils_lib_results.JsonResult>;
    getCurrentUser(req: Request): Promise<inversify_express_utils_lib_results.JsonResult>;
    Remove({ id }: RemoveUserCommandBody): Promise<User>;
}

export { UserController };

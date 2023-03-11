import { BaseHttpController, results } from 'inversify-express-utils';
import { IAuthenticationService } from '../../../../../core/applicationServices/Authentication/IAuthenticationService.js';
import { UIMapper } from '../../../../common/mappings/UIMapper.js';
import { SignUpCommandBody } from './requests/command/SignUpCommandBody.js';
import { AuthenticationQueryBody } from './requests/query/AuthenticationQueryBody.js';
import { IAuthenticationHandler } from '../../../../common/config/application/common/auth/IAuthenticationHandler.js';
import '../../../../../core/domain/User/User.js';
import '../../../../../core/applicationServices/Authentication/requests/repository/command/SignUpCommand.js';
import '../../../../../core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.js';
import '@wufe/mapper';
import '../../../../common/config/application/common/auth/models/Authentication.js';

declare class AuthenticationController extends BaseHttpController {
    private readonly authenticationService;
    private readonly authenticationHandler;
    private readonly uiMapper;
    constructor(authenticationService: IAuthenticationService, authenticationHandler: IAuthenticationHandler, uiMapper: UIMapper);
    create({ nickname, email, password }: SignUpCommandBody): Promise<results.JsonResult>;
    index({ email, password }: AuthenticationQueryBody): Promise<results.JsonResult>;
}

export { AuthenticationController };

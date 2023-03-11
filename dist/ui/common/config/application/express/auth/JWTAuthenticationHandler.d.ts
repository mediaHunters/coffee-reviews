import { JWTTokenUtil } from '../../common/auth/utils/JWTTokenUtil.js';
import { IAuthenticationHandler } from '../../common/auth/IAuthenticationHandler.js';
import { UIMapper } from '../../../../mappings/UIMapper.js';
import { IAuthenticationService } from '../../../../../../core/applicationServices/Authentication/IAuthenticationService.js';
import { AuthenticationQuery } from '../../../../../../core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery.js';
import { Authentication } from '../../common/auth/models/Authentication.js';
import 'http';
import 'jsonwebtoken';
import '../../../../models/User.js';
import '../../../../../../core/domain/User/User.js';
import '@wufe/mapper';
import '../../../../../../core/applicationServices/Authentication/requests/repository/command/SignUpCommand.js';

declare class JWTAuthenticationHandler implements IAuthenticationHandler {
    private readonly jwtTokenUtil;
    private readonly authenticationService;
    private readonly uiMapper;
    constructor(jwtTokenUtil: JWTTokenUtil, authenticationService: IAuthenticationService, uiMapper: UIMapper);
    authenticate(request: AuthenticationQuery): Promise<Authentication>;
}

export { JWTAuthenticationHandler };

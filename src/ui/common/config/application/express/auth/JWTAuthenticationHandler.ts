import { inject, injectable } from 'inversify';

import { NOT_FOUND } from 'http-status-codes';

import {
  UI_APPLICATION_IDENTIFIERS,
  UI_IDENTIFIERS,
  UI_MAPPINGS_IDENTIFIERS,
} from 'ui/UIModuleSymbols';
import { JWTTokenUtil } from 'ui/common/config/application/common/auth/utils/JWTTokenUtil';
import { IAuthenticationHandler } from 'ui/common/config/application/common/auth/IAuthenticationHandler';
import {
  APP_TOKEN_LIFE,
  APP_TOKEN_SECRET,
} from 'ui/common/config/consts/variables';
import { UIMapper } from 'ui/common/mappings/UIMapper';
import { User as UserUI } from 'ui/common/models/User';
import { UserInterfaceError } from 'ui/common/config/errors/UserInterfaceError';

import { IAuthenticationService } from 'core/applicationServices/Authentication/IAuthenticationService';

import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_MAPPING_IDENTIFIERS,
} from 'core/CoreModuleSymbols';

import { User } from 'core/domain/User/User';
import { AuthenticationQuery } from 'core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery';
import { Authentication } from 'ui/common/config/application/common/auth/models/Authentication';

const PAYLOAD_KEY = 'user';

@injectable()
export class JWTAuthenticationHandler implements IAuthenticationHandler {
  constructor(
    @inject(UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)
    private readonly jwtTokenUtil: JWTTokenUtil,
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)
    private readonly authenticationService: IAuthenticationService,
    @inject(UI_IDENTIFIERS.UI_MAPPER)
    private readonly uiMapper: UIMapper
  ) {}

  async authenticate(request: AuthenticationQuery) {
    const user = await this.authenticationService.verifyCredentials(request);
    if (!user) {
      throw new UserInterfaceError(NOT_FOUND, 'USER_NOT_FOUND');
    }

    const userUi = this.uiMapper.mapper.map<User, UserUI>(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN,
      },
      user
    );

    return new Authentication(
      this.jwtTokenUtil.generateToken(
        userUi,
        APP_TOKEN_SECRET,
        APP_TOKEN_LIFE,
        PAYLOAD_KEY
      ),
      user
    );
  }
}

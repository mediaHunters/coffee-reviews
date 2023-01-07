import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
  results
} from "inversify-express-utils";

import { OK } from "http-status-codes";

import { inject } from "inversify";

import { SignUpCommand } from "core/applicationServices/Authentication/requests/repository/command/SignUpCommand";
import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_MAPPING_IDENTIFIERS
} from "core/CoreModuleSymbols";
import { User } from "core/domain/User/User";
import { IAuthenticationService } from "core/applicationServices/Authentication/IAuthenticationService";

import { UIMapper } from "ui/common/mappings/UIMapper";
import {
  UI_APPLICATION_IDENTIFIERS,
  UI_IDENTIFIERS,
  UI_MAPPINGS_IDENTIFIERS
} from "ui/UIModuleSymbols";
import { User as UserUI } from "ui/common/models/User";
import { SignUpCommandBody } from "ui/portal/Authentication/rest/v1/requests/command/SignUpCommandBody";

import { AuthenticationQueryBody } from "ui/portal/Authentication/rest/v1/requests/query/AuthenticationQueryBody";
import { IAuthenticationHandler } from "ui/common/config/application/common/auth/IAuthenticationHandler";
import { AuthenticationQuery } from "core/applicationServices/Authentication/requests/handler/query/AuthenticationQuery";

@controller("/v1/auth")
export class AuthenticationController extends BaseHttpController {
  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)
    private readonly authenticationService: IAuthenticationService,
    @inject(UI_APPLICATION_IDENTIFIERS.JWT_AUTHENTICATION_HANDLER)
    private readonly authenticationHandler: IAuthenticationHandler,
    @inject(UI_IDENTIFIERS.UI_MAPPER)
    private readonly uiMapper: UIMapper
  ) {
    super();
  }

  @httpPost("/signup")
  public async create(
    @requestBody()
    { nickname, email, password }: SignUpCommandBody
  ): Promise<results.JsonResult> {
    const user = await this.authenticationService.signUp(
      new SignUpCommand(nickname, email, password)
    );

    const createdUser = this.uiMapper.mapper.map<User, UserUI>(
      {
        destination: UI_MAPPINGS_IDENTIFIERS.USER_UI,
        source: DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
      },
      user
    );
    return this.json(createdUser, OK);
  }

  @httpPost("/")
  public async index(
    @requestBody() { email, password }: AuthenticationQueryBody
  ): Promise<results.JsonResult> {
    const authentication = await this.authenticationHandler.authenticate(
      new AuthenticationQuery(email, password)
    );

    return this.json(authentication, OK);
  }
}

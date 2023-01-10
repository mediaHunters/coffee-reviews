import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpPost,
  queryParam,
  requestBody,
  requestParam,
  results,
} from 'inversify-express-utils';
import { OK } from 'http-status-codes';

import { DOMAIN_APPLICATION_SERVICE_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { ICoffeeService } from 'core/applicationServices/Coffee/ICoffeeService';
import { isAuthenticated } from 'ui/common/config/application/express/auth/middlewares/isAuthenticated';
import { USER_ROLE } from 'core/domain/User/UserRole';
import { AddCoffeeCommandBody } from 'ui/portal/Coffee/requests/command/AddCoffeeCommandBody';
import { AddCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { DeleteCoffeeCommandBody } from 'ui/portal/Coffee/requests/command/DeleteCoffeeCommandBody';
import { getCurrentUser } from 'ui/common/config/application/express/auth/utils/getHttpContext';

@controller('/v1/coffee')
export class CoffeeController extends BaseHttpController {
  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)
    private readonly CoffeeService: ICoffeeService
  ) {
    super();
  }

  @httpPost('/add', isAuthenticated({ role: USER_ROLE.MEMBER }))
  async add(
    @requestBody()
    {
      brand,
      name,
      type,
      imgUrl,
      description,
      burntLvl,
      reflink,
      CoffeeStatus,
    }: AddCoffeeCommandBody
  ): Promise<results.JsonResult> {
    const coffeeCommand = new AddCoffeeCommand(
      brand,
      name,
      type,
      imgUrl,
      description,
      burntLvl,
      reflink || '',
      CoffeeStatus
    );

    const result = await this.CoffeeService.add(coffeeCommand);
    return this.json(result, OK);
  }

  @httpPost('/delete')
  async delete(
    @queryParam() command: DeleteCoffeeCommandBody
  ): Promise<results.JsonResult> {
    const result = await this.CoffeeService.delete(
      new DeleteCoffeeCommand(command.id)
    );

    return this.json(result, OK);
  }
}

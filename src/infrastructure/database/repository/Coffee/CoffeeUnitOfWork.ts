import { inject, injectable } from 'inversify';

import { DOMAIN_REPOSITORY_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { ICoffeeUnitOfWork } from 'core/domainServices/Coffee/ICoffeeUnitOfWork';
import { CreateCoffeeUnitOfWorkRepositoryCommand } from 'core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';
import { IUserRepository } from 'core/domainServices/User/IUserRepository';
import { CreateCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand';
import { INFRASTRUCTURE_IDENTIFIERS } from 'infrastructure/InfrastructureModuleSymbols';
import { BunnyCdn } from 'infrastructure/cdn/BunnyCdn';
import { BaseError } from 'core/common/errors/BaseError';

import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';

@injectable()
export class CoffeeUnitOfWork implements ICoffeeUnitOfWork {
  constructor(
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.COFFEE_REPOSITORY)
    private readonly coffeeRepository: ICoffeeRepository,
    @inject(DOMAIN_REPOSITORY_IDENTIFIERS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @inject(INFRASTRUCTURE_IDENTIFIERS.BUNNY_CDN)
    private readonly bunnyCdnClient: BunnyCdn
  ) {}

  async create({
    brand,
    name,
    type,
    image,
    description,
    burntLvl,
    reflink,
    CoffeeStatus,
  }: CreateCoffeeUnitOfWorkRepositoryCommand): Promise<Coffee> {
    const response = await this.bunnyCdnClient.uploadImage(image);

    if ([400, 401].includes(response.status)) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.BAD_REQUEST]
      );
    }

    return this.coffeeRepository.createCoffee(
      new CreateCoffeeRepositoryCommand(
        brand,
        name,
        type,
        response.url,
        description,
        burntLvl,
        reflink,
        CoffeeStatus
      )
    );
  }

  delete({ id }: DeleteCoffeeRepositoryCommand): Promise<Coffee> {
    return this.coffeeRepository.deleteCoffee(
      new DeleteCoffeeRepositoryCommand(id)
    );
  }

  // @Transactional({
  //   connectionName: () => process.env.ORM_CONNECTION,
  // })
  // async addCoffeeReview({
  //   userId,
  //   coffeeId,
  //   look,
  //   smell,
  //   taste,
  // }: AddReviewRepositoryCommand): Promise<Coffee> {

  //   return this.coffeeRepository.addCoffeeReview(
  //     new AddReviewRepositoryCommand(userId, coffeeId, look, smell, taste)
  //   );
  // }
}

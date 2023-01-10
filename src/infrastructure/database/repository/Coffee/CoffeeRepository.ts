import { inject } from 'inversify';

import { Repository } from 'infrastructure/database/repository/common/Repository';
import { Coffee as CoffeeEntity } from 'infrastructure/database/entities/Coffee';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { AddCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/AddCoffeeRepositoryCommand';
import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';
import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';
import { BaseError } from 'core/common/errors/BaseError';
import { Review } from 'infrastructure/database/entities/Review';
import { getCurrentUser } from 'ui/common/config/application/express/auth/utils/getHttpContext';
import { User } from 'infrastructure/database/entities/User';

export class CoffeeRepository
  extends Repository<CoffeeEntity>
  implements ICoffeeRepository
{
  constructor(
    @inject(INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)
    private readonly dbMapper: DBMapper
  ) {
    super(CoffeeEntity);
  }

  async addCoffee({
    CoffeeStatus,
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
  }: AddCoffeeRepositoryCommand): Promise<Coffee> {
    const coffee = new CoffeeEntity();
    coffee.brand = brand;
    coffee.name = name;
    coffee.type = type;
    coffee.imgUrl = imgUrl;
    coffee.description = description;
    coffee.burntLvl = burntLvl;
    coffee.reflink = reflink;
    coffee.CoffeeStatus = CoffeeStatus;
    coffee.createdAt = new Date();
    coffee.type = type;

    coffee.reviews = [];
    const savedCoffee = await this.save(coffee);

    return this.dbMapper.mapper.map<CoffeeEntity, Coffee>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY,
      },
      savedCoffee
    );
  }

  async deleteCoffee({ id }: DeleteCoffeeRepositoryCommand): Promise<Coffee> {
    const result = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('Coffee.reviews', 'Review')
      .where('Coffee.id = :id ', { id })
      .getOne();

    if (!result) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.COFFEE_NOT_FOUND]
      );
    }

    this.remove(result);

    return this.dbMapper.mapper.map<CoffeeEntity, Coffee>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY,
      },
      result
    );
  }

  getAllCoffees(): Promise<Coffee[]> {
    throw new Error('Method not implemented.');
  }

  getCoffee(): Promise<Coffee> {
    throw new Error('Method not implemented.');
  }
}

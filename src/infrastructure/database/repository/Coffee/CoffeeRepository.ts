import { inject } from 'inversify';

import { UpdateResult } from 'typeorm';

import { Repository } from 'infrastructure/database/repository/common/Repository';
import { Coffee as CoffeeEntity } from 'infrastructure/database/entities/Coffee';
import { ICoffeeRepository } from 'core/domainServices/Coffee/ICoffeeRepository';
import { CreateCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand';
import { DBMapper } from 'infrastructure/database/mappings/DBMapper';
import {
  DATABASE_MAPPING_IDENTIFIERS,
  INFRASTRUCTURE_IDENTIFIERS,
} from 'infrastructure/InfrastructureModuleSymbols';
import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { DeleteCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand';
import { InfrastructureErrors } from 'infrastructure/common/errors/InfrastructureErrors';
import { BaseError } from 'core/common/errors/BaseError';
import { Coffee } from 'core/domain/Coffee/Coffee';
import { FindOneCoffeeRepositoryQuery } from 'core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery';
import { UpdateCoffeeRepositoryCommand } from 'core/domainServices/Coffee/requests/repository/command/UpdateCoffeeRepositoryCommand';

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

  async findAllCoffees(): Promise<Coffee[]> {
    const coffees = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('Coffee.reviews', 'Review')
      .getMany();

    return this.dbMapper.mapper.map<CoffeeEntity[], Coffee[]>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY,
      },
      coffees
    );
  }

  async findOneCoffee({ id }: FindOneCoffeeRepositoryQuery): Promise<Coffee> {
    const coffee = await this.custom()
      .createQueryBuilder()
      .leftJoinAndSelect('Coffee.reviews', 'Review')
      .where('Coffee.id = :id ', { id })
      .getOne();

    if (!coffee) {
      throw new BaseError(
        InfrastructureErrors[InfrastructureErrors.COFFEE_NOT_FOUND]
      );
    }

    return this.dbMapper.mapper.map<CoffeeEntity, Coffee>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY,
      },
      coffee
    );
  }

  async createCoffee({
    CoffeeStatus,
    brand,
    name,
    type,
    imgUrl,
    description,
    burntLvl,
    reflink,
  }: CreateCoffeeRepositoryCommand): Promise<Coffee> {
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

  async updateCoffee({
    coffee,
    coffeeId,
  }: UpdateCoffeeRepositoryCommand): Promise<UpdateResult> {
    const updatedCoffee = await this.custom()
      .createQueryBuilder()
      .update(CoffeeEntity)
      .set({ ...coffee })
      .where('id = :id', { id: coffeeId })
      .execute();

    return updatedCoffee;
  }

  // TODO: make it transational
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

  // sortAndPaginate({
  //   sortBy,
  //   skip,
  //   take,
  // }: SearchRepositoryQuery): Promise<Coffee> {
  //   // const result = await this.custom().createQueryBuilder().addOrderBy(sortB, skip, take))
  // }
}

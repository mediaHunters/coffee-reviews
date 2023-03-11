import { UpdateResult } from 'typeorm';
import { Repository } from '../common/Repository.js';
import { C as Coffee } from '../../../../Coffee-5b23241d.js';
import { ICoffeeRepository } from '../../../../core/domainServices/Coffee/ICoffeeRepository.js';
import { CreateCoffeeRepositoryCommand } from '../../../../core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.js';
import { DBMapper } from '../../mappings/DBMapper.js';
import { DeleteCoffeeRepositoryCommand } from '../../../../core/domainServices/Coffee/requests/repository/command/DeleteCoffeeRepositoryCommand.js';
import { Coffee as Coffee$1 } from '../../../../core/domain/Coffee/Coffee.js';
import { FindOneCoffeeRepositoryQuery } from '../../../../core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery.js';
import { UpdateCoffeeRepositoryCommand } from '../../../../core/domainServices/Coffee/requests/repository/command/UpdateCoffeeRepositoryCommand.js';
import 'typeorm/common/ObjectType';
import 'typeorm/repository/Repository';
import '../common/IRepository.js';
import '../common/Query.js';
import '../common/UpdateQueryData.js';
import '../../entities/Base.js';
import '@wufe/mapper';

declare class CoffeeRepository extends Repository<Coffee> implements ICoffeeRepository {
    private readonly dbMapper;
    constructor(dbMapper: DBMapper);
    findAllCoffees(): Promise<Coffee$1[]>;
    findOneCoffee({ id }: FindOneCoffeeRepositoryQuery): Promise<Coffee$1>;
    createCoffee({ CoffeeStatus, brand, name, type, imgUrl, description, burntLvl, reflink, }: CreateCoffeeRepositoryCommand): Promise<Coffee$1>;
    updateCoffee({ coffee, coffeeId, }: UpdateCoffeeRepositoryCommand): Promise<UpdateResult>;
    deleteCoffee({ id }: DeleteCoffeeRepositoryCommand): Promise<Coffee$1>;
}

export { CoffeeRepository };

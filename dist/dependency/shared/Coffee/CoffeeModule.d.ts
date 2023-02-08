import { interfaces } from 'inversify';
import { BaseModule } from '../../BaseModule.js';

declare class CoffeeModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideCoffeeService;
    private provideCoffeeRepository;
    private provideCoffeeUnitOfWork;
}

export { CoffeeModule };

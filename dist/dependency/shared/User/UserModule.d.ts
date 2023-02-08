import { interfaces } from 'inversify';
import { BaseModule } from '../../BaseModule.js';

declare class UserModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideUserRepository;
    private provideUserUnitOfWork;
    private provideUserService;
}

export { UserModule };

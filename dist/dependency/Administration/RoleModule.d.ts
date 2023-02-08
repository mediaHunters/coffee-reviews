import { interfaces } from 'inversify';
import { BaseModule } from '../BaseModule.js';

declare class RoleModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    provideRoleRepository(bind: interfaces.Bind): void;
}

export { RoleModule };

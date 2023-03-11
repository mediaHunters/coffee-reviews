import { interfaces } from 'inversify';
import { BaseModule } from '../../BaseModule.js';

declare class AuthenticationModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideAuthenticationService;
}

export { AuthenticationModule };

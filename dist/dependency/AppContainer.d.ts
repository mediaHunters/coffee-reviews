import { BaseContainer } from './BaseContainer.js';
import 'inversify';

declare class AppContainer extends BaseContainer {
    constructor();
    init(): void;
    private initializeSharedNamespace;
    private provideCommonModule;
    private provideApplicationModule;
    private provideAuthenticationModule;
    private provideUserModule;
    private provideReviewModule;
    private provideCoffeModule;
    private provideRoleModule;
    private provideInversifyExpressApplication;
}

export { AppContainer };

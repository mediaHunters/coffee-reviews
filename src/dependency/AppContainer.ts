import express from 'express';

import { InversifyExpressServer } from 'inversify-express-utils';

import { CommonModule } from 'dependency/common/CommonModule';
import { ApplicationModule } from 'dependency/common/ApplicationModule';
import { BaseContainer } from 'dependency/BaseContainer';

import { ExpressApplication } from 'ui/common/config/application/express/ExpressApplication';
import { errorHandler } from 'ui/common/config/errors/handlers/errorHandler';
import { UI_APPLICATION_IDENTIFIERS } from 'ui/UIModuleSymbols';

import { AuthenticationModule } from 'dependency/shared/Authentication/AuthenticationModule';
import { UserModule } from 'dependency/shared/User/UserModule';
import { RoleModule } from 'dependency/Administration/RoleModule';
import { ApplicationAuthProvider } from 'ui/common/config/application/express/auth/middlewares/ApplicationAuthProvider';
import { CoffeeModule } from 'dependency/shared/Coffee/CoffeeModule';
import { ReviewModule } from 'dependency/shared/Review/ReviewModule';

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.provideCommonModule();

    this.provideApplicationModule();
    this.provideInversifyExpressApplication();
    this.initializeSharedNamespace();

    this.provideUserModule();
    this.provideRoleModule();
    this.provideCoffeModule();
    this.provideReviewModule();
  }

  private initializeSharedNamespace(): void {
    this.provideAuthenticationModule();
  }

  private provideCommonModule(): void {
    this.load(new CommonModule());
  }

  private provideApplicationModule(): void {
    this.load(new ApplicationModule());
  }

  private provideAuthenticationModule(): void {
    this.load(new AuthenticationModule());
  }

  private provideUserModule(): void {
    this.load(new UserModule());
  }

  private provideReviewModule(): void {
    this.load(new ReviewModule());
  }

  private provideCoffeModule(): void {
    this.load(new CoffeeModule());
  }

  private provideRoleModule(): void {
    this.load(new RoleModule());
  }

  private provideInversifyExpressApplication(): void {
    this.bind<InversifyExpressServer>(
      UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
    ).toConstantValue(
      new InversifyExpressServer(
        this,
        this.get<express.Router>(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER),
        { rootPath: '/' },
        this.get<ExpressApplication>(
          UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION
        ).getApplication(),
        ApplicationAuthProvider
      ).setErrorConfig(errorHandler)
    );
  }
}

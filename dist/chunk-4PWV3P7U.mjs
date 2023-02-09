import {
  ApplicationAuthProvider
} from "./chunk-4LOGOHG7.mjs";
import {
  errorHandler
} from "./chunk-BOA6SWSX.mjs";
import {
  UserModule
} from "./chunk-5WAZFWXB.mjs";
import {
  AuthenticationModule
} from "./chunk-5IOOD5UU.mjs";
import {
  CoffeeModule
} from "./chunk-CMX5GW5W.mjs";
import {
  ReviewModule
} from "./chunk-ZLB7CELC.mjs";
import {
  RoleModule
} from "./chunk-OB4YRABA.mjs";
import {
  ApplicationModule
} from "./chunk-VZP4HHR3.mjs";
import {
  CommonModule
} from "./chunk-CRDUVCFD.mjs";
import {
  BaseContainer
} from "./chunk-7FIEQXWC.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";

// src/dependency/AppContainer.ts
import { InversifyExpressServer } from "inversify-express-utils";
var AppContainer = class extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true
    });
  }
  init() {
    this.provideCommonModule();
    this.provideApplicationModule();
    this.provideInversifyExpressApplication();
    this.initializeSharedNamespace();
    this.provideUserModule();
    this.provideRoleModule();
    this.provideCoffeModule();
    this.provideReviewModule();
  }
  initializeSharedNamespace() {
    this.provideAuthenticationModule();
  }
  provideCommonModule() {
    this.load(new CommonModule());
  }
  provideApplicationModule() {
    this.load(new ApplicationModule());
  }
  provideAuthenticationModule() {
    this.load(new AuthenticationModule());
  }
  provideUserModule() {
    this.load(new UserModule());
  }
  provideReviewModule() {
    this.load(new ReviewModule());
  }
  provideCoffeModule() {
    this.load(new CoffeeModule());
  }
  provideRoleModule() {
    this.load(new RoleModule());
  }
  provideInversifyExpressApplication() {
    this.bind(
      UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
    ).toConstantValue(
      new InversifyExpressServer(
        this,
        this.get(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER),
        { rootPath: "/" },
        this.get(
          UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION
        ).getApplication(),
        ApplicationAuthProvider
      ).setErrorConfig(errorHandler)
    );
  }
};

export {
  AppContainer
};
//# sourceMappingURL=chunk-4PWV3P7U.mjs.map
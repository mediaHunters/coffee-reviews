import {
  ApplicationAuthProvider
} from "./chunk-6RKCPTAA.mjs";
import {
  errorHandler
} from "./chunk-BOA6SWSX.mjs";
import {
  ReviewModule
} from "./chunk-7UF3B2ZS.mjs";
import {
  CoffeeModule
} from "./chunk-KT7EV47P.mjs";
import {
  AuthenticationModule
} from "./chunk-NXJLTVWJ.mjs";
import {
  UserModule
} from "./chunk-JDQHD7IK.mjs";
import {
  RoleModule
} from "./chunk-QWXD4N2G.mjs";
import {
  ApplicationModule
} from "./chunk-6WDFDGQV.mjs";
import {
  CommonModule
} from "./chunk-WQO73IGP.mjs";
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
//# sourceMappingURL=chunk-NSPEKE67.mjs.map
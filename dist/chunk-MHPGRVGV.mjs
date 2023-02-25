import {
  ApplicationAuthProvider
} from "./chunk-2FTXGC6R.mjs";
import {
  errorHandler
} from "./chunk-YWKRDJKM.mjs";
import {
  ReviewModule
} from "./chunk-4LKA2WYQ.mjs";
import {
  UserModule
} from "./chunk-HKODC65S.mjs";
import {
  AuthenticationModule
} from "./chunk-GCTVOXBS.mjs";
import {
  CoffeeModule
} from "./chunk-7237UQRN.mjs";
import {
  RoleModule
} from "./chunk-TFGHYG2G.mjs";
import {
  ApplicationModule
} from "./chunk-KYIAAB42.mjs";
import {
  CommonModule
} from "./chunk-4H3XVVJ4.mjs";
import {
  BaseContainer
} from "./chunk-WEIENW4F.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(AppContainer, "AppContainer");

export {
  AppContainer
};
//# sourceMappingURL=chunk-MHPGRVGV.mjs.map
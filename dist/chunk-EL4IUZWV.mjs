import {
  CoffeeEntityToCoffeeDomain
} from "./chunk-QWHVMCYD.mjs";
import {
  RoleEntityToRoleDomain
} from "./chunk-KK564ENV.mjs";
import {
  UserEntityToUserDomain
} from "./chunk-PYQS4V3E.mjs";
import {
  ReviewEntityToReviewDomain
} from "./chunk-FFBDVLMB.mjs";
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/mappings/DBMapper.ts
import { Mapper } from "@wufe/mapper";
import { injectable } from "inversify";
var DBMapper = class {
  constructor() {
    this.mapper = new Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserEntityToUserDomain().configureMapping(this.mapper);
    RoleEntityToRoleDomain().configureMapping(this.mapper);
    CoffeeEntityToCoffeeDomain().configureMapping(this.mapper);
    ReviewEntityToReviewDomain().configureMapping(this.mapper);
  }
};
DBMapper = __decorateClass([
  injectable()
], DBMapper);

export {
  DBMapper
};
//# sourceMappingURL=chunk-EL4IUZWV.mjs.map
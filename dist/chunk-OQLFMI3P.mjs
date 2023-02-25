import {
  CoffeeEntityToCoffeeDomain
} from "./chunk-VE7WGU6D.mjs";
import {
  ReviewEntityToReviewDomain
} from "./chunk-DNTQWXAD.mjs";
import {
  RoleEntityToRoleDomain
} from "./chunk-DEJ35HUK.mjs";
import {
  UserEntityToUserDomain
} from "./chunk-GHR4U5RO.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

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
__name(DBMapper, "DBMapper");
DBMapper = __decorateClass([
  injectable()
], DBMapper);

export {
  DBMapper
};
//# sourceMappingURL=chunk-OQLFMI3P.mjs.map
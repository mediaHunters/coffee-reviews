import {
  UserDomainToUserUI
} from "./chunk-2EXUCPJG.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/mappings/UIMapper.ts
import { injectable } from "inversify";
import { Mapper } from "@wufe/mapper";
var UIMapper = class {
  constructor() {
    this.mapper = new Mapper().withConfiguration(
      (configuration) => configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true)
    );
    this.initialize();
  }
  initialize() {
    UserDomainToUserUI().configureMapping(this.mapper);
  }
};
__name(UIMapper, "UIMapper");
UIMapper = __decorateClass([
  injectable()
], UIMapper);

export {
  UIMapper
};
//# sourceMappingURL=chunk-K2TBMOCK.mjs.map
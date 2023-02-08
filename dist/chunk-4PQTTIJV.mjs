import {
  UserDomainToUserUI
} from "./chunk-JVFB7EOP.mjs";
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

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
UIMapper = __decorateClass([
  injectable()
], UIMapper);

export {
  UIMapper
};
//# sourceMappingURL=chunk-4PQTTIJV.mjs.map
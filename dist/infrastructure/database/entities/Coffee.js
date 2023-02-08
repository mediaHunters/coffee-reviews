"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/infrastructure/database/entities/Coffee.ts
var Coffee_exports = {};
__export(Coffee_exports, {
  Coffee: () => Coffee
});
module.exports = __toCommonJS(Coffee_exports);
var import_typeorm2 = require("typeorm");

// src/core/domain/Coffee/CoffeeType.ts
var COFFEE_TYPE = /* @__PURE__ */ ((COFFEE_TYPE2) => {
  COFFEE_TYPE2["BEANS"] = "BEANS";
  COFFEE_TYPE2["POWDER"] = "POWDER";
  return COFFEE_TYPE2;
})(COFFEE_TYPE || {});

// src/core/domain/Coffee/CoffeeBurnLvl.ts
var COFFEE_BURNT_LVL = /* @__PURE__ */ ((COFFEE_BURNT_LVL2) => {
  COFFEE_BURNT_LVL2["LIGHT_ROAST"] = "LIGHT_ROAST";
  COFFEE_BURNT_LVL2["MEDUIM_ROAST"] = "MEDIUM_ROAST";
  COFFEE_BURNT_LVL2["DARK_ROAST"] = "DARK_ROAST";
  return COFFEE_BURNT_LVL2;
})(COFFEE_BURNT_LVL || {});

// src/infrastructure/database/enum/CoffeStatus.ts
var COFFEE_STATUS = /* @__PURE__ */ ((COFFEE_STATUS2) => {
  COFFEE_STATUS2["WAITING_QUEUE"] = "WAITING_QUEUE";
  COFFEE_STATUS2["VERIFIED"] = "VERIFIED";
  COFFEE_STATUS2["BLOCKED"] = "BLOCKED";
  return COFFEE_STATUS2;
})(COFFEE_STATUS || {});

// src/infrastructure/database/entities/Base.ts
var import_typeorm = require("typeorm");
var Model = class extends import_typeorm.BaseEntity {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Model.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Model.prototype, "updatedAt", 2);

// src/infrastructure/database/entities/Coffee.ts
var Coffee = class extends Model {
};
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Coffee.prototype, "brand", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Coffee.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    enum: COFFEE_TYPE,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Coffee.prototype, "imgUrl", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Coffee.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "burntLvl", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Coffee.prototype, "reflink", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    enum: COFFEE_STATUS,
    nullable: false,
    type: "enum",
    default: "WAITING_QUEUE" /* WAITING_QUEUE */
  })
], Coffee.prototype, "CoffeeStatus", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)("Review", (Review) => Review.coffee, {
    cascade: true
  })
], Coffee.prototype, "reviews", 2);
Coffee = __decorateClass([
  (0, import_typeorm2.Entity)()
], Coffee);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Coffee
});
//# sourceMappingURL=Coffee.js.map
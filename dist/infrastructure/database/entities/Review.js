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

// src/infrastructure/database/entities/Review.ts
var Review_exports = {};
__export(Review_exports, {
  Review: () => Review
});
module.exports = __toCommonJS(Review_exports);
var import_typeorm2 = require("typeorm");

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

// src/infrastructure/database/entities/Review.ts
var Review = class extends Model {
};
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "rating", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "look", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "smell", 2);
__decorateClass([
  (0, import_typeorm2.Column)("decimal")
], Review.prototype, "taste", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Review.prototype, "coffeeId", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("Coffee", (Coffee) => Coffee.reviews, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({ name: "coffee", referencedColumnName: "id" })
], Review.prototype, "coffee", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text", { nullable: true })
], Review.prototype, "userId", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)("User", (user) => user.reviews),
  (0, import_typeorm2.JoinColumn)({ name: "user", referencedColumnName: "id" })
], Review.prototype, "user", 2);
Review = __decorateClass([
  (0, import_typeorm2.Entity)()
], Review);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Review
});
//# sourceMappingURL=Review.js.map
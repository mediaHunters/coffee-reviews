"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/infrastructure/database/fixtures/factories/ReviewFactory.ts
var import_typeorm_seeding2 = require("typeorm-seeding");

// src/infrastructure/database/entities/Review.ts
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
  (0, import_typeorm2.ManyToOne)("Coffee", (Coffee2) => Coffee2.reviews, {
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

// src/infrastructure/database/fixtures/factories/CoffeeFactory.ts
var import_typeorm_seeding = require("typeorm-seeding");

// src/infrastructure/database/entities/Coffee.ts
var import_typeorm3 = require("typeorm");

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

// src/infrastructure/database/entities/Coffee.ts
var Coffee = class extends Model {
};
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "brand", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_TYPE,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "imgUrl", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "burntLvl", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Coffee.prototype, "reflink", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    enum: COFFEE_STATUS,
    nullable: false,
    type: "enum",
    default: "WAITING_QUEUE" /* WAITING_QUEUE */
  })
], Coffee.prototype, "CoffeeStatus", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)("Review", (Review2) => Review2.coffee, {
    cascade: true
  })
], Coffee.prototype, "reviews", 2);
Coffee = __decorateClass([
  (0, import_typeorm3.Entity)()
], Coffee);

// src/infrastructure/database/fixtures/factories/CoffeeFactory.ts
var coffeeDefined = new Coffee();
(0, import_typeorm_seeding.define)(Coffee, () => {
  coffeeDefined.CoffeeStatus = "VERIFIED";
  coffeeDefined.brand = "Lavacca";
  coffeeDefined.burntLvl = "LIGHT_ROAST";
  coffeeDefined.createdAt = /* @__PURE__ */ new Date();
  coffeeDefined.description = "Lore ipusm do lor";
  coffeeDefined.imgUrl = "http://dumm-url.png";
  coffeeDefined.name = "sample coffee name";
  coffeeDefined.reflink = "http://another-dumb-link.com";
  return coffeeDefined;
});

// src/infrastructure/database/fixtures/factories/ReviewFactory.ts
(0, import_typeorm_seeding2.define)(Review, () => {
  const review = new Review();
  review.coffee = coffeeDefined;
  review.rating = 4;
  review.userId = "ewjoij12l;1@#EWQ";
  return review;
});
//# sourceMappingURL=ReviewFactory.js.map
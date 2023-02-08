import {
  Model
} from "./chunk-JXCWUIPY.mjs";
import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/entities/Review.ts
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
var Review = class extends Model {
};
__decorateClass([
  Column("decimal")
], Review.prototype, "rating", 2);
__decorateClass([
  Column("decimal")
], Review.prototype, "look", 2);
__decorateClass([
  Column("decimal")
], Review.prototype, "smell", 2);
__decorateClass([
  Column("decimal")
], Review.prototype, "taste", 2);
__decorateClass([
  Column("text")
], Review.prototype, "coffeeId", 2);
__decorateClass([
  ManyToOne("Coffee", (Coffee) => Coffee.reviews, {
    onDelete: "CASCADE"
  }),
  JoinColumn({ name: "coffee", referencedColumnName: "id" })
], Review.prototype, "coffee", 2);
__decorateClass([
  Column("text", { nullable: true })
], Review.prototype, "userId", 2);
__decorateClass([
  ManyToOne("User", (user) => user.reviews),
  JoinColumn({ name: "user", referencedColumnName: "id" })
], Review.prototype, "user", 2);
Review = __decorateClass([
  Entity()
], Review);

export {
  Review
};
//# sourceMappingURL=chunk-T2N4V2W6.mjs.map
import {
  Model
} from "./chunk-YM6N2TQQ.mjs";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/entities/Review.ts
init_typeorm();
var Review = class extends Model {
};
__name(Review, "Review");
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
//# sourceMappingURL=chunk-HX3VYCCS.mjs.map
import {
  COFFEE_STATUS
} from "./chunk-BC5WD6ER.mjs";
import {
  COFFEE_BURNT_LVL
} from "./chunk-ZWUAFPJ7.mjs";
import {
  COFFEE_TYPE
} from "./chunk-55VCL34Z.mjs";
import {
  Model
} from "./chunk-YM6N2TQQ.mjs";
import {
  Column,
  Entity,
  OneToMany,
  init_typeorm
} from "./chunk-RIQVZG47.mjs";
import {
  __decorateClass,
  __name
} from "./chunk-C22X3M6A.mjs";

// src/infrastructure/database/entities/Coffee.ts
init_typeorm();
var Coffee = class extends Model {
};
__name(Coffee, "Coffee");
__decorateClass([
  Column("text")
], Coffee.prototype, "brand", 2);
__decorateClass([
  Column("text")
], Coffee.prototype, "name", 2);
__decorateClass([
  Column({
    enum: COFFEE_TYPE,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "type", 2);
__decorateClass([
  Column("text")
], Coffee.prototype, "imgUrl", 2);
__decorateClass([
  Column("text")
], Coffee.prototype, "description", 2);
__decorateClass([
  Column({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: "enum"
  })
], Coffee.prototype, "burntLvl", 2);
__decorateClass([
  Column("text")
], Coffee.prototype, "reflink", 2);
__decorateClass([
  Column({
    enum: COFFEE_STATUS,
    nullable: false,
    type: "enum",
    default: "WAITING_QUEUE" /* WAITING_QUEUE */
  })
], Coffee.prototype, "CoffeeStatus", 2);
__decorateClass([
  OneToMany("Review", (Review) => Review.coffee, {
    cascade: true
  })
], Coffee.prototype, "reviews", 2);
Coffee = __decorateClass([
  Entity()
], Coffee);

export {
  Coffee
};
//# sourceMappingURL=chunk-WMYDNDP5.mjs.map
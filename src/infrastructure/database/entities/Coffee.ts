import { Column, Entity, OneToMany } from 'typeorm';

import { COFFEE_TYPE } from 'core/domain/Coffee/CoffeeType';
import { COFFEE_BURNT_LVL } from 'core/domain/Coffee/CoffeeBurnLvl';
import type { Review } from 'infrastructure/database/entities/Review';
import { COFFEE_STATUS } from 'infrastructure/database/enum/CoffeStatus';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class Coffee extends Model {
  @Column()
  brand!: string;

  @Column()
  name!: string;

  @Column({
    enum: COFFEE_TYPE,
    nullable: false,
    type: 'enum',
  })
  type!: string;

  @Column()
  imgUrl!: string;

  @Column()
  description!: string;

  @Column({
    enum: COFFEE_BURNT_LVL,
    nullable: false,
    type: 'enum',
  })
  burntLvl!: string;

  @Column()
  reflink!: string;

  @Column({
    enum: COFFEE_STATUS,
    nullable: false,
    type: 'enum',
    default: COFFEE_STATUS.WAITING_QUEUE,
  })
  CoffeeStatus!: string;

  @OneToMany('Review', (Review: Review) => Review.coffee, {
    cascade: true,
  })
  reviews!: Review[];
}

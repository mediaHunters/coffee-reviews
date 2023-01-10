import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { COFFEE_TYPE } from 'core/domain/Coffee/CoffeeType';
import { COFFEE_BURNT_LVL } from 'core/domain/Coffee/CoffeeBurnLvl';
import type { Review } from 'infrastructure/database/entities/Review';
import { COFFEE_STATUS } from 'infrastructure/database/enum/CoffeStatus';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany('Review', (Review: Review) => Review.coffee)
  reviews!: Review[];

  @Column()
  reflink!: string;

  @Column({
    enum: COFFEE_STATUS,
    nullable: false,
    type: 'enum',
  })
  CoffeeStatus!: string;
}

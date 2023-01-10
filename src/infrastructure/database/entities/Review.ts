import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import type { User } from 'infrastructure/database/entities/User';
import type { Coffee } from 'infrastructure/database/entities/Coffee';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rating!: number;

  @ManyToOne('Coffee', (Coffee: Coffee) => Coffee.reviews)
  @JoinColumn()
  coffee!: Coffee;

  @Column()
  userId!: number;

  @OneToOne('User')
  @JoinColumn()
  user!: User;
}

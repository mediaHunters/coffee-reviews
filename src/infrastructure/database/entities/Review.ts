import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import type { Coffee } from 'infrastructure/database/entities/Coffee';
import type { User } from 'infrastructure/database/entities/User';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class Review extends Model {
  @Column()
  rating!: number;

  @Column()
  look!: number;

  @Column()
  smell!: number;

  @Column()
  taste!: number;

  @Column()
  coffeeId!: string;

  @ManyToOne('Coffee', (Coffee: Coffee) => Coffee.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  coffee!: Coffee;

  @Column({ nullable: true })
  userId!: string;

  @ManyToOne('User', (user: User) => user.reviews)
  @JoinColumn()
  user!: User;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import type { Role } from 'infrastructure/database/entities/Role';
import type { Review } from 'infrastructure/database/entities/Review';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true,
  })
  firstName?: string;

  @Column({
    nullable: true,
  })
  lastName?: string;

  @Column({ unique: true })
  nickname!: string;

  @Column()
  email!: string;

  // hide password from user
  @Column()
  password!: string;

  @ManyToOne('Role', (role: Role) => role.user)
  role!: Role;

  @OneToMany('Review', (review: Review) => review.user)
  review!: Review[];
}

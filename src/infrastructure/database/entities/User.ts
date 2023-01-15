import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

import type { Role } from 'infrastructure/database/entities/Role';
import type { Review } from 'infrastructure/database/entities/Review';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class User extends Model {
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

  @Column()
  password!: string;

  @ManyToOne('Role', (role: Role) => role.user)
  role!: Role;

  @OneToMany('Review', (review: Review) => review.user)
  reviews!: Review[];

  toJson() {
    return {
      ...this,
      password: undefined,
    };
  }
}

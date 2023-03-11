import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

import type { Role } from 'infrastructure/database/entities/Role';
import type { Review } from 'infrastructure/database/entities/Review';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class User extends Model {
  @Column('text', {
    nullable: true,
  })
  firstName?: string;

  @Column('text', {
    nullable: true,
  })
  lastName?: string;

  @Column('text', { unique: true })
  nickname!: string;

  @Column('text')
  email!: string;

  @Column('text')
  password!: string;

  @ManyToOne('Role', (role: Role) => role.user)
  role!: Role;

  @OneToMany('Review', (review: Review) => review.user)
  reviews!: Review[];

  toJson(): any {
    return {
      ...this,
      password: undefined,
    };
  }
}

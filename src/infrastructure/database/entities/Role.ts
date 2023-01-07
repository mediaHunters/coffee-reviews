import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { USER_ROLE } from 'infrastructure/database/enum/UserRole';
import type { User } from 'infrastructure/database/entities/User';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    default: USER_ROLE.MEMBER,
    enum: USER_ROLE,
    nullable: false,
    type: 'enum',
  })
  name!: string;

  @OneToMany('User', (user: User) => user.role)
  user!: User;
}

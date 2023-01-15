import { Column, Entity, OneToMany } from 'typeorm';

import { USER_ROLE } from 'infrastructure/database/enum/UserRole';
import type { User } from 'infrastructure/database/entities/User';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class Role extends Model {
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

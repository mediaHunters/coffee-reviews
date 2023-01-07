import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import type { Role } from 'infrastructure/database/entities/Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  nickname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @ManyToOne('Role', (role: Role) => role.user)
  role!: Role;
}

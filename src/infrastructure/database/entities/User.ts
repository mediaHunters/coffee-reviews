import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Role } from "infrastructure/database/entities/Role";

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

  @ManyToOne(
    () => Role,
    role => role.user
  )
  role!: Role;
}

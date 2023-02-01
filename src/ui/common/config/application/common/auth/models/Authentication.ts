import { User } from 'core/domain/User/User';

export class Authentication {
  constructor(public readonly token: string, public readonly user: User) {}
}

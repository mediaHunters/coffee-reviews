import { Coffee } from 'core/domain/Coffee/Coffee';

export class UpdateCoffeeRepositoryCommand {
  constructor(
    public readonly coffee: Omit<Partial<Coffee>, 'reviews'>,
    public readonly coffeeId: string
  ) {}
}

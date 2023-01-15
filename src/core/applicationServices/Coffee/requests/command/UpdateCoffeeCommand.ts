import { Coffee } from 'core/domain/Coffee/Coffee';

export class UpdateCoffeeCommand {
  constructor(
    public readonly coffee: Partial<Coffee>,
    public readonly coffeeId: string
  ) {}
}

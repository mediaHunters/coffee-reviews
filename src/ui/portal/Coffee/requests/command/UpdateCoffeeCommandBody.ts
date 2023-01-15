import { Coffee } from 'core/domain/Coffee/Coffee';

export class UpdateCoffeeCommandBody {
  constructor(public readonly coffee: Partial<Coffee>) {}
}

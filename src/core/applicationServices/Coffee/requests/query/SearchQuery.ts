import { CoffeeSearchCriteria } from 'core/domain/Coffee/CoffeeSearchCriteria';

export class SearchQuery {
  constructor(
    public readonly sortBy: CoffeeSearchCriteria,
    public readonly skip: number,
    public readonly take: number
  ) {}
}

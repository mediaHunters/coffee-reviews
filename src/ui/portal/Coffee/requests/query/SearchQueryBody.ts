import { CoffeeSearchCriteria } from 'core/domain/Coffee/CoffeeSearchCriteria';

export class SearchQueryBody {
  constructor(
    public readonly sortBy: CoffeeSearchCriteria,
    public readonly skip: number,
    public readonly take: number
  ) {
    skip = skip || 0;
    take = take || 10;
  }
}

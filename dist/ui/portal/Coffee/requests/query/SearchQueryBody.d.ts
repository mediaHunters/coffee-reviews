import { CoffeeSearchCriteria } from '../../../../../core/domain/Coffee/CoffeeSearchCriteria.js';

declare class SearchQueryBody {
    readonly sortBy: CoffeeSearchCriteria;
    readonly skip: number;
    readonly take: number;
    constructor(sortBy: CoffeeSearchCriteria, skip: number, take: number);
}

export { SearchQueryBody };

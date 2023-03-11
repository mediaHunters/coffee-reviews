import { Coffee } from '../../../../../domain/Coffee/Coffee.js';

declare class UpdateCoffeeRepositoryCommand {
    readonly coffee: Omit<Partial<Coffee>, 'reviews'>;
    readonly coffeeId: string;
    constructor(coffee: Omit<Partial<Coffee>, 'reviews'>, coffeeId: string);
}

export { UpdateCoffeeRepositoryCommand };

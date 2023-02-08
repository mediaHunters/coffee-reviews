import { Coffee } from '../../../../domain/Coffee/Coffee.js';

declare class UpdateCoffeeCommand {
    readonly coffee: Partial<Coffee>;
    readonly coffeeId: string;
    constructor(coffee: Partial<Coffee>, coffeeId: string);
}

export { UpdateCoffeeCommand };

import { Coffee } from '../../../../../core/domain/Coffee/Coffee.js';

declare class UpdateCoffeeCommandBody {
    readonly coffee: Partial<Coffee>;
    constructor(coffee: Partial<Coffee>);
}

export { UpdateCoffeeCommandBody };

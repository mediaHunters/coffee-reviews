declare class AddCoffeeReviewRepositoryCommand {
    readonly userId: string;
    readonly coffeeId: string;
    readonly look: number;
    readonly smell: number;
    readonly taste: number;
    constructor(userId: string, coffeeId: string, look: number, smell: number, taste: number);
}

export { AddCoffeeReviewRepositoryCommand };

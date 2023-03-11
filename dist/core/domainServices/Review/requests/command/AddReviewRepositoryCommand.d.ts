declare class AddReviewRepositoryCommand {
    readonly userId: string;
    readonly coffeeId: string;
    readonly rating: number;
    readonly look: number;
    readonly smell: number;
    readonly taste: number;
    constructor(userId: string, coffeeId: string, rating: number, look: number, smell: number, taste: number);
}

export { AddReviewRepositoryCommand };

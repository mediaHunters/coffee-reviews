declare class Review {
    readonly id: string;
    readonly look: number;
    readonly smell: number;
    readonly taste: number;
    readonly rating: number;
    readonly coffeeId: string;
    readonly userId: string;
    constructor(id: string, look: number, smell: number, taste: number, rating: number, coffeeId: string, userId: string);
}

export { Review };

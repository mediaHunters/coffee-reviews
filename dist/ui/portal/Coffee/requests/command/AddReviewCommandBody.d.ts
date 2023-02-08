declare class AddReviewCommandBody {
    readonly rating: number;
    readonly look: number;
    readonly smell: number;
    readonly taste: number;
    readonly userId: string;
    constructor(rating: number, look: number, smell: number, taste: number, userId: string);
}

export { AddReviewCommandBody };

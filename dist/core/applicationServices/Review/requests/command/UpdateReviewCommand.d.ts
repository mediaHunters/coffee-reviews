import { Review } from '../../../../domain/Review/Review.js';

declare class UpdateReviewCommand {
    readonly review: Partial<Review>;
    readonly reviewId: string;
    constructor(review: Partial<Review>, reviewId: string);
}

export { UpdateReviewCommand };

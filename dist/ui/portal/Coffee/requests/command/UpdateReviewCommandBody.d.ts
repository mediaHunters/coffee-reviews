import { Review } from '../../../../../core/domain/Review/Review.js';

declare class UpdateReviewCommandBody {
    readonly review: Partial<Review>;
    constructor(review: Partial<Review>);
}

export { UpdateReviewCommandBody };

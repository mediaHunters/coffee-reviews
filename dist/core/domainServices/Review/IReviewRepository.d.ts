import { UpdateResult } from 'typeorm';
import { Review } from '../../domain/Review/Review.js';
import { AddReviewRepositoryCommand } from './requests/command/AddReviewRepositoryCommand.js';
import { UpdateReviewRepositoryCommand } from './requests/command/UpdateReviewRepositoryCommand.js';
import { GetReviewsRepositoryQuery } from './requests/query/GetReviewsRepositoryQuery.js';
import { DeleteReviewRepositoryCommand } from './requests/command/DeleteReviewRepositoryCommand.js';

interface IReviewRepository {
    getReviews(query: GetReviewsRepositoryQuery): Promise<Review[]>;
    addReview(command: AddReviewRepositoryCommand): Promise<Review>;
    updateReview(command: UpdateReviewRepositoryCommand): Promise<UpdateResult>;
    deleteReview(command: DeleteReviewRepositoryCommand): Promise<Review>;
}

export { IReviewRepository };

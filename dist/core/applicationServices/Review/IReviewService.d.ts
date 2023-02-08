import { UpdateResult } from 'typeorm';
import { AddReviewCommand } from './requests/command/AddReviewCommand.js';
import { UpdateReviewCommand } from './requests/command/UpdateReviewCommand.js';
import { Review } from '../../domain/Review/Review.js';
import { GetUserReviewsQuery } from './requests/query/GetUserReviewsQuery.js';
import { DeleteReviewCommand } from './requests/command/DeleteReviewCommand.js';

interface IReviewService {
    getAll(query: GetUserReviewsQuery): Promise<Review[]>;
    add(command: AddReviewCommand): Promise<Review>;
    update(command: UpdateReviewCommand): Promise<UpdateResult>;
    delete(command: DeleteReviewCommand): Promise<Review>;
}

export { IReviewService };

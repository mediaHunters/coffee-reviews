import { UpdateResult } from 'typeorm';
import { IReviewService } from './IReviewService.js';
import { AddReviewCommand } from './requests/command/AddReviewCommand.js';
import { Review } from '../../domain/Review/Review.js';
import { IReviewRepository } from '../../domainServices/Review/IReviewRepository.js';
import { GetUserReviewsQuery } from './requests/query/GetUserReviewsQuery.js';
import { UpdateReviewCommand } from './requests/command/UpdateReviewCommand.js';
import { DeleteReviewCommand } from './requests/command/DeleteReviewCommand.js';
import '../../domainServices/Review/requests/command/AddReviewRepositoryCommand.js';
import '../../domainServices/Review/requests/command/UpdateReviewRepositoryCommand.js';
import '../../domainServices/Review/requests/query/GetReviewsRepositoryQuery.js';
import '../../domainServices/Review/requests/command/DeleteReviewRepositoryCommand.js';

declare class ReviewService implements IReviewService {
    private readonly reviewRepository;
    constructor(reviewRepository: IReviewRepository);
    getAll({ userId }: GetUserReviewsQuery): Promise<Review[]>;
    add({ userId, coffeeId, rating, look, smell, taste, }: AddReviewCommand): Promise<Review>;
    update({ reviewId, review }: UpdateReviewCommand): Promise<UpdateResult>;
    delete({ reviewId }: DeleteReviewCommand): Promise<Review>;
}

export { ReviewService };

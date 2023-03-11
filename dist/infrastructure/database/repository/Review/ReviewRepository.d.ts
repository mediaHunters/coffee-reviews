import { UpdateResult } from 'typeorm';
import { Review as Review$1 } from '../../../../core/domain/Review/Review.js';
import { IReviewRepository } from '../../../../core/domainServices/Review/IReviewRepository.js';
import { AddReviewRepositoryCommand } from '../../../../core/domainServices/Review/requests/command/AddReviewRepositoryCommand.js';
import { R as Review } from '../../../../Coffee-5b23241d.js';
import { DBMapper } from '../../mappings/DBMapper.js';
import { Repository } from '../common/Repository.js';
import { GetReviewsRepositoryQuery } from '../../../../core/domainServices/Review/requests/query/GetReviewsRepositoryQuery.js';
import { UpdateReviewRepositoryCommand } from '../../../../core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand.js';
import { DeleteReviewRepositoryCommand } from '../../../../core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand.js';
import '../../entities/Base.js';
import '@wufe/mapper';
import 'typeorm/common/ObjectType';
import 'typeorm/repository/Repository';
import '../common/IRepository.js';
import '../common/Query.js';
import '../common/UpdateQueryData.js';

declare class ReviewRepository extends Repository<Review> implements IReviewRepository {
    private readonly dbMapper;
    constructor(dbMapper: DBMapper);
    getReviews({ userId }: GetReviewsRepositoryQuery): Promise<Review$1[]>;
    addReview({ rating, look, smell, taste, userId, coffeeId, }: AddReviewRepositoryCommand): Promise<Review$1>;
    updateReview({ review, reviewId, }: UpdateReviewRepositoryCommand): Promise<UpdateResult>;
    deleteReview({ reviewId, }: DeleteReviewRepositoryCommand): Promise<Review$1>;
}

export { ReviewRepository };

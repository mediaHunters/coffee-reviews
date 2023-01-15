import { UpdateResult } from 'typeorm';

import { AddReviewCommand } from 'core/applicationServices/Review/requests/command/AddReviewCommand';
import { UpdateReviewCommand } from 'core/applicationServices/Review/requests/command/UpdateReviewCommand';
import { Review } from 'core/domain/Review/Review';
import { GetUserReviewsQuery } from 'core/applicationServices/Review/requests/query/GetUserReviewsQuery';
import { DeleteReviewCommand } from 'core/applicationServices/Review/requests/command/DeleteReviewCommand';

export interface IReviewService {
  getAll(query: GetUserReviewsQuery): Promise<Review[]>;
  add(command: AddReviewCommand): Promise<Review>;
  update(command: UpdateReviewCommand): Promise<UpdateResult>;
  delete(command: DeleteReviewCommand): Promise<Review>;
}

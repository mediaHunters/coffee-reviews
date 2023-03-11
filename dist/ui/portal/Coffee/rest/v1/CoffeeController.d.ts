import { BaseHttpController, results } from 'inversify-express-utils';
import { ICoffeeService } from '../../../../../core/applicationServices/Coffee/ICoffeeService.js';
import { CreateCoffeeCommandBody } from '../../requests/command/CreateCoffeeCommandBody.js';
import { DeleteCoffeeCommandBody } from '../../requests/command/DeleteCoffeeCommandBody.js';
import { AddReviewCommandBody } from '../../requests/command/AddReviewCommandBody.js';
import { FindOneCoffeeRepositoryQueryBody } from '../../requests/query/FindOneCoffeeRepositoryQueryBody.js';
import { UpdateCoffeeCommandBody } from '../../requests/command/UpdateCoffeeCommandBody.js';
import { GetUserReviewsQueryBody } from '../../requests/query/GetUserReviewsQueryBody.js';
import { IReviewService } from '../../../../../core/applicationServices/Review/IReviewService.js';
import { UpdateReviewCommandBody } from '../../requests/command/UpdateReviewCommandBody.js';
import { DeleteReviewCommandBody } from '../../requests/command/DeleteReviewCommandBody.js';
import 'typeorm';
import '../../../../../core/applicationServices/Coffee/requests/command/AddCoffeeCommand.js';
import '../../../../../core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand.js';
import '../../../../../core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand.js';
import '../../../../../core/domain/Coffee/Coffee.js';
import '../../../../../core/applicationServices/Coffee/requests/query/FindOneCoffeeQuery.js';
import '../../../../../core/applicationServices/Review/requests/command/AddReviewCommand.js';
import '../../../../../core/applicationServices/Review/requests/command/UpdateReviewCommand.js';
import '../../../../../core/domain/Review/Review.js';
import '../../../../../core/applicationServices/Review/requests/query/GetUserReviewsQuery.js';
import '../../../../../core/applicationServices/Review/requests/command/DeleteReviewCommand.js';

declare class CoffeeController extends BaseHttpController {
    private readonly coffeeService;
    private readonly reviewService;
    constructor(coffeeService: ICoffeeService, reviewService: IReviewService);
    GetAll(): Promise<results.JsonResult>;
    get({ coffeeId }: FindOneCoffeeRepositoryQueryBody): Promise<results.JsonResult>;
    add({ brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus, }: CreateCoffeeCommandBody): Promise<results.JsonResult>;
    update(coffeeId: string, { coffee }: UpdateCoffeeCommandBody): Promise<results.JsonResult>;
    delete({ id }: DeleteCoffeeCommandBody): Promise<results.JsonResult>;
    GetUserReviews({ userId }: GetUserReviewsQueryBody): Promise<results.JsonResult>;
    addReview(coffeeId: string, { rating, look, smell, taste, userId }: AddReviewCommandBody): Promise<results.JsonResult>;
    updateReview(reviewId: string, { review }: UpdateReviewCommandBody): Promise<results.JsonResult>;
    deleteReview({ reviewId }: DeleteReviewCommandBody): Promise<results.JsonResult>;
}

export { CoffeeController };

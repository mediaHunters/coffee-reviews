import { interfaces } from 'inversify';
import { BaseModule } from '../../BaseModule.js';

declare class ReviewModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideReviewService;
    private provideReviewRepository;
}

export { ReviewModule };

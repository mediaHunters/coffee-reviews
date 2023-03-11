import { interfaces } from 'inversify';

import {
  DOMAIN_APPLICATION_SERVICE_IDENTIFIERS,
  DOMAIN_REPOSITORY_IDENTIFIERS,
} from 'core/CoreModuleSymbols';
import { IReviewRepository } from 'core/domainServices/Review/IReviewRepository';
import { BaseModule } from 'dependency/BaseModule';
import { ReviewRepository } from 'infrastructure/database/repository/Review/ReviewRepository';
import { ReviewService } from 'core/applicationServices/Review/ReviewService';
import { IReviewService } from 'core/applicationServices/Review/IReviewService';

export class ReviewModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideReviewService(bind);
    this.provideReviewRepository(bind);
  }

  private provideReviewService(bind: interfaces.Bind): void {
    bind<IReviewService>(
      DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE
    ).to(ReviewService);
  }

  private provideReviewRepository(bind: interfaces.Bind): void {
    bind<IReviewRepository>(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY).to(
      ReviewRepository
    );
  }
}

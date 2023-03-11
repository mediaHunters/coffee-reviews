import { Mapper } from '@wufe/mapper';

import { IMapping } from 'core/common/mapper/IMapping';
import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Review } from 'core/domain/Review/Review';
import { Review as ReviewEntity } from 'infrastructure/database/entities/Review';
import { DATABASE_MAPPING_IDENTIFIERS } from 'infrastructure/InfrastructureModuleSymbols';

export const ReviewEntityToReviewDomain = (): IMapping => ({
  configureMapping(mapper: Mapper): void {
    mapper.createMap<ReviewEntity, Review>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY,
      },
      Review
    );
  },
});

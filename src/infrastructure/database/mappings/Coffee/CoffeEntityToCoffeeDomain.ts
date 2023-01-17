import { Mapper } from '@wufe/mapper';

import { IMapping } from 'core/common/mapper/IMapping';

import { DOMAIN_MAPPING_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { Coffee } from 'core/domain/Coffee/Coffee';

import { Coffee as CoffeeEntity } from 'infrastructure/database/entities/Coffee';
import { DATABASE_MAPPING_IDENTIFIERS } from 'infrastructure/InfrastructureModuleSymbols';

export const CoffeeEntityToCoffeeDomain = (): IMapping => ({
  configureMapping(mapper: Mapper): void {
    mapper.createMap<CoffeeEntity, Coffee>(
      {
        destination: DOMAIN_MAPPING_IDENTIFIERS.COFFEE_DOMAIN,
        source: DATABASE_MAPPING_IDENTIFIERS.COFFEE_ENTITY,
      },
      Coffee
    );
  },
});

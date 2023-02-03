import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';

import { AppContainer } from 'dependency/AppContainer.js';
import { ExpressApplication } from 'ui/common/config/application/express/ExpressApplication';
import { PORT } from 'ui/common/config/consts/variables';
import { UI_APPLICATION_IDENTIFIERS } from 'ui/UIModuleSymbols';
import { IOrm } from 'infrastructure/database/orm/IOrm';
import { DATABASE_IDENTIFIERS } from 'infrastructure/InfrastructureModuleSymbols';

(async () => {
  const appContainer = new AppContainer();

  appContainer.init();
  appContainer
    .get<ExpressApplication>(UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION)
    .initialize();
  appContainer.get<InversifyExpressServer>(
    UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
  );
  await appContainer.get<IOrm>(DATABASE_IDENTIFIERS.ORM).initialize();
  appContainer
    .get<InversifyExpressServer>(
      UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
    )
    .build()
    // eslint-disable-next-line no-console
    .listen(PORT, () => console.log(`Server listening on ${PORT}`));
})();

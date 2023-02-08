import { ContainerModule, interfaces } from 'inversify';

declare abstract class BaseModule extends ContainerModule {
    abstract init(bind: interfaces.Bind): void;
}

export { BaseModule };

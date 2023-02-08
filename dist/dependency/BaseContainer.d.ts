import { Container } from 'inversify';

declare abstract class BaseContainer extends Container {
    abstract init(): void;
}

export { BaseContainer };

import { interfaces } from 'inversify';
import { BaseModule } from '../BaseModule.js';

declare class CommonModule extends BaseModule {
    constructor();
    init(bind: interfaces.Bind): void;
    private provideUIMapper;
    private provideDBMapper;
    private provideOrm;
}

export { CommonModule };

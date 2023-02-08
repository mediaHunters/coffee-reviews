import { IOrm } from './IOrm.js';

declare class CROrm implements IOrm {
    initialize(): Promise<void>;
}

export { CROrm };

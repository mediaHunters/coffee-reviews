import { Mapper } from '@wufe/mapper';

interface IMapping {
    configureMapping(mapper: Mapper): void;
}

export { IMapping };

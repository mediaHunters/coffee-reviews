import { Mapper } from '@wufe/mapper';

declare class DBMapper {
    readonly mapper: Mapper;
    constructor();
    private initialize;
}

export { DBMapper };

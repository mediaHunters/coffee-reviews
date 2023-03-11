import { ObjectLiteral, AbstractRepository } from 'typeorm';
import { ObjectType } from 'typeorm/common/ObjectType';
import { Repository as Repository$1 } from 'typeorm/repository/Repository';
import { IRepository } from './IRepository.js';
import { Query } from './Query.js';
import { UpdateQueryData } from './UpdateQueryData.js';

declare abstract class Repository<E extends ObjectLiteral> extends AbstractRepository<E> implements IRepository<E, Repository$1<E>> {
    protected readonly entity: ObjectType<E>;
    constructor(entity: ObjectType<E>);
    find(id: string | number): Promise<E | undefined>;
    findBy(condition: Query<E>): Promise<E[]>;
    findMany(ids: string[] | number[]): Promise<E[]>;
    findAll(): Promise<E[]>;
    query(query: string, parameters?: any[]): Promise<E[]>;
    update(condition: string | number, data: UpdateQueryData<E>): Promise<boolean>;
    updateAll(condition: string[] | number[], data: E): Promise<boolean>;
    delete(condition: string | number): Promise<boolean>;
    deleteAll(condition: string[] | number[]): Promise<boolean>;
    remove(entity: E): Promise<E>;
    removeAll(entities: E[]): Promise<E[]>;
    save(entity: E): Promise<E>;
    saveAll(entities: E[]): Promise<E[]>;
    custom(): Repository$1<E>;
    protected getConnectionName(): string | undefined;
    private getDBRepository;
}

export { Repository };

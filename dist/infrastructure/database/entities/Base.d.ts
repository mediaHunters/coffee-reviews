import { BaseEntity } from 'typeorm';

declare abstract class Model extends BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export { Model as default };

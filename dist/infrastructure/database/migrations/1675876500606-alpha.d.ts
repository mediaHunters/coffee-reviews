import { MigrationInterface, QueryRunner } from 'typeorm';

declare class alpha1675876500606 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

export { alpha1675876500606 };

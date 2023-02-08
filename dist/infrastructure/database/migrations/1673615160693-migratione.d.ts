import { MigrationInterface, QueryRunner } from 'typeorm';

declare class migratione1673615160693 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

export { migratione1673615160693 };

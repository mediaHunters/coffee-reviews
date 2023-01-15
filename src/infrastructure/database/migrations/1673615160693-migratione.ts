import { MigrationInterface, QueryRunner } from 'typeorm';

export class migratione1673615160693 implements MigrationInterface {
  name = 'migratione1673615160693';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_bd110d69d616d317d76f3e8e429"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_1337f93918c70837d3cea105d39"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "coffeeId" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "userId" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "REL_1337f93918c70837d3cea105d3"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_bd110d69d616d317d76f3e8e429" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_1337f93918c70837d3cea105d39" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_1337f93918c70837d3cea105d39"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_bd110d69d616d317d76f3e8e429"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "REL_1337f93918c70837d3cea105d3" UNIQUE ("userId")`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "userId" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "coffeeId" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_1337f93918c70837d3cea105d39" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_bd110d69d616d317d76f3e8e429" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1673354165522 implements MigrationInterface {
    name = 'migration1673354165522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."role_name_enum" AS ENUM('ADMIN', 'MEMBER')`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" "public"."role_name_enum" NOT NULL DEFAULT 'MEMBER', CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "userId" integer NOT NULL, "coffeeId" integer, "user_id" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."coffee_type_enum" AS ENUM('BEANS', 'POWDER')`);
        await queryRunner.query(`CREATE TYPE "public"."coffee_burntlvl_enum" AS ENUM('LIGHT_ROAST', 'MEDIUM_ROAST', 'DARK_ROAST')`);
        await queryRunner.query(`CREATE TYPE "public"."coffee_coffeestatus_enum" AS ENUM('WAITING_QUEUE', 'VERIFIED', 'BLOCKED')`);
        await queryRunner.query(`CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "name" character varying NOT NULL, "type" "public"."coffee_type_enum" NOT NULL, "imgUrl" character varying NOT NULL, "description" character varying NOT NULL, "burntLvl" "public"."coffee_burntlvl_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "reflink" character varying NOT NULL, "CoffeeStatus" "public"."coffee_coffeestatus_enum" NOT NULL, CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying, "nickname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "roleId" integer, CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_bd110d69d616d317d76f3e8e429" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_81446f2ee100305f42645d4d6c2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_81446f2ee100305f42645d4d6c2"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_bd110d69d616d317d76f3e8e429"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "coffee"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_coffeestatus_enum"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_burntlvl_enum"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_type_enum"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TYPE "public"."role_name_enum"`);
    }

}

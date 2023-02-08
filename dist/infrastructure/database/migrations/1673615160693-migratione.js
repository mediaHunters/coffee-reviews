"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infrastructure/database/migrations/1673615160693-migratione.ts
var migratione_exports = {};
__export(migratione_exports, {
  migratione1673615160693: () => migratione1673615160693
});
module.exports = __toCommonJS(migratione_exports);
var migratione1673615160693 = class {
  constructor() {
    this.name = "migratione1673615160693";
  }
  async up(queryRunner) {
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
  async down(queryRunner) {
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
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  migratione1673615160693
});
//# sourceMappingURL=1673615160693-migratione.js.map
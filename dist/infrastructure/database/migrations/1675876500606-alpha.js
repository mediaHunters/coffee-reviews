"use strict";
<<<<<<< HEAD
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

// src/infrastructure/database/migrations/1675876500606-alpha.ts
var alpha_exports = {};
__export(alpha_exports, {
  alpha1675876500606: () => alpha1675876500606
});
module.exports = __toCommonJS(alpha_exports);
var alpha1675876500606 = class {
  constructor() {
    this.name = "alpha1675876500606";
  }
  async up(queryRunner) {
    await queryRunner.query(`CREATE TYPE "public"."coffee_type_enum" AS ENUM('BEANS', 'POWDER')`);
    await queryRunner.query(`CREATE TYPE "public"."coffee_burntlvl_enum" AS ENUM('LIGHT_ROAST', 'MEDIUM_ROAST', 'DARK_ROAST')`);
    await queryRunner.query(`CREATE TYPE "public"."coffee_coffeestatus_enum" AS ENUM('WAITING_QUEUE', 'VERIFIED', 'BLOCKED')`);
    await queryRunner.query(`CREATE TABLE "coffee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "brand" text NOT NULL, "name" text NOT NULL, "type" "public"."coffee_type_enum" NOT NULL, "imgUrl" text NOT NULL, "description" text NOT NULL, "burntLvl" "public"."coffee_burntlvl_enum" NOT NULL, "reflink" text NOT NULL, "CoffeeStatus" "public"."coffee_coffeestatus_enum" NOT NULL DEFAULT 'WAITING_QUEUE', CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "review" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "rating" numeric NOT NULL, "look" numeric NOT NULL, "smell" numeric NOT NULL, "taste" numeric NOT NULL, "coffeeId" text NOT NULL, "userId" text, "coffee" uuid, "user" uuid, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TYPE "public"."role_name_enum" AS ENUM('ADMIN', 'MEMBER')`);
    await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" "public"."role_name_enum" NOT NULL DEFAULT 'MEMBER', CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" text, "lastName" text, "nickname" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "roleId" uuid, CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e" FOREIGN KEY ("coffee") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_534b9ccc62d81280da578de6fe6" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
    await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_534b9ccc62d81280da578de6fe6"`);
    await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TYPE "public"."role_name_enum"`);
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(`DROP TABLE "coffee"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_coffeestatus_enum"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_burntlvl_enum"`);
    await queryRunner.query(`DROP TYPE "public"."coffee_type_enum"`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alpha1675876500606
});
//# sourceMappingURL=1675876500606-alpha.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "alpha1675876500606", {
    enumerable: true,
    get: ()=>alpha1675876500606
});
class alpha1675876500606 {
    name = 'alpha1675876500606';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."coffee_type_enum" AS ENUM('BEANS', 'POWDER')`);
        await queryRunner.query(`CREATE TYPE "public"."coffee_burntlvl_enum" AS ENUM('LIGHT_ROAST', 'MEDIUM_ROAST', 'DARK_ROAST')`);
        await queryRunner.query(`CREATE TYPE "public"."coffee_coffeestatus_enum" AS ENUM('WAITING_QUEUE', 'VERIFIED', 'BLOCKED')`);
        await queryRunner.query(`CREATE TABLE "coffee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "brand" text NOT NULL, "name" text NOT NULL, "type" "public"."coffee_type_enum" NOT NULL, "imgUrl" text NOT NULL, "description" text NOT NULL, "burntLvl" "public"."coffee_burntlvl_enum" NOT NULL, "reflink" text NOT NULL, "CoffeeStatus" "public"."coffee_coffeestatus_enum" NOT NULL DEFAULT 'WAITING_QUEUE', CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "rating" numeric NOT NULL, "look" numeric NOT NULL, "smell" numeric NOT NULL, "taste" numeric NOT NULL, "coffeeId" text NOT NULL, "userId" text, "coffee" uuid, "user" uuid, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."role_name_enum" AS ENUM('ADMIN', 'MEMBER')`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" "public"."role_name_enum" NOT NULL DEFAULT 'MEMBER', CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" text, "lastName" text, "nickname" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "roleId" uuid, CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e" FOREIGN KEY ("coffee") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_534b9ccc62d81280da578de6fe6" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_534b9ccc62d81280da578de6fe6"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_d3cbff3e4fa667b825374f8661e"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TYPE "public"."role_name_enum"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "coffee"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_coffeestatus_enum"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_burntlvl_enum"`);
        await queryRunner.query(`DROP TYPE "public"."coffee_type_enum"`);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9taWdyYXRpb25zLzE2NzU4NzY1MDA2MDYtYWxwaGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNaWdyYXRpb25JbnRlcmZhY2UsIFF1ZXJ5UnVubmVyfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5leHBvcnQgY2xhc3MgYWxwaGExNjc1ODc2NTAwNjA2IGltcGxlbWVudHMgTWlncmF0aW9uSW50ZXJmYWNlIHtcbiAgICBuYW1lID0gJ2FscGhhMTY3NTg3NjUwMDYwNidcblxuICAgIHB1YmxpYyBhc3luYyB1cChxdWVyeVJ1bm5lcjogUXVlcnlSdW5uZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYENSRUFURSBUWVBFIFwicHVibGljXCIuXCJjb2ZmZWVfdHlwZV9lbnVtXCIgQVMgRU5VTSgnQkVBTlMnLCAnUE9XREVSJylgKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYENSRUFURSBUWVBFIFwicHVibGljXCIuXCJjb2ZmZWVfYnVybnRsdmxfZW51bVwiIEFTIEVOVU0oJ0xJR0hUX1JPQVNUJywgJ01FRElVTV9ST0FTVCcsICdEQVJLX1JPQVNUJylgKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYENSRUFURSBUWVBFIFwicHVibGljXCIuXCJjb2ZmZWVfY29mZmVlc3RhdHVzX2VudW1cIiBBUyBFTlVNKCdXQUlUSU5HX1FVRVVFJywgJ1ZFUklGSUVEJywgJ0JMT0NLRUQnKWApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQ1JFQVRFIFRBQkxFIFwiY29mZmVlXCIgKFwiaWRcIiB1dWlkIE5PVCBOVUxMIERFRkFVTFQgdXVpZF9nZW5lcmF0ZV92NCgpLCBcImNyZWF0ZWRBdFwiIFRJTUVTVEFNUCBOT1QgTlVMTCBERUZBVUxUIG5vdygpLCBcInVwZGF0ZWRBdFwiIFRJTUVTVEFNUCBOT1QgTlVMTCBERUZBVUxUIG5vdygpLCBcImJyYW5kXCIgdGV4dCBOT1QgTlVMTCwgXCJuYW1lXCIgdGV4dCBOT1QgTlVMTCwgXCJ0eXBlXCIgXCJwdWJsaWNcIi5cImNvZmZlZV90eXBlX2VudW1cIiBOT1QgTlVMTCwgXCJpbWdVcmxcIiB0ZXh0IE5PVCBOVUxMLCBcImRlc2NyaXB0aW9uXCIgdGV4dCBOT1QgTlVMTCwgXCJidXJudEx2bFwiIFwicHVibGljXCIuXCJjb2ZmZWVfYnVybnRsdmxfZW51bVwiIE5PVCBOVUxMLCBcInJlZmxpbmtcIiB0ZXh0IE5PVCBOVUxMLCBcIkNvZmZlZVN0YXR1c1wiIFwicHVibGljXCIuXCJjb2ZmZWVfY29mZmVlc3RhdHVzX2VudW1cIiBOT1QgTlVMTCBERUZBVUxUICdXQUlUSU5HX1FVRVVFJywgQ09OU1RSQUlOVCBcIlBLXzRkMjcyMzllZTBiOTlhNDkxYWQ4MDZhZWM0NlwiIFBSSU1BUlkgS0VZIChcImlkXCIpKWApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQ1JFQVRFIFRBQkxFIFwicmV2aWV3XCIgKFwiaWRcIiB1dWlkIE5PVCBOVUxMIERFRkFVTFQgdXVpZF9nZW5lcmF0ZV92NCgpLCBcImNyZWF0ZWRBdFwiIFRJTUVTVEFNUCBOT1QgTlVMTCBERUZBVUxUIG5vdygpLCBcInVwZGF0ZWRBdFwiIFRJTUVTVEFNUCBOT1QgTlVMTCBERUZBVUxUIG5vdygpLCBcInJhdGluZ1wiIG51bWVyaWMgTk9UIE5VTEwsIFwibG9va1wiIG51bWVyaWMgTk9UIE5VTEwsIFwic21lbGxcIiBudW1lcmljIE5PVCBOVUxMLCBcInRhc3RlXCIgbnVtZXJpYyBOT1QgTlVMTCwgXCJjb2ZmZWVJZFwiIHRleHQgTk9UIE5VTEwsIFwidXNlcklkXCIgdGV4dCwgXCJjb2ZmZWVcIiB1dWlkLCBcInVzZXJcIiB1dWlkLCBDT05TVFJBSU5UIFwiUEtfMmU0Mjk5YTM0M2E4MTU3NDIxNzI1NWMwMGNhXCIgUFJJTUFSWSBLRVkgKFwiaWRcIikpYCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KGBDUkVBVEUgVFlQRSBcInB1YmxpY1wiLlwicm9sZV9uYW1lX2VudW1cIiBBUyBFTlVNKCdBRE1JTicsICdNRU1CRVInKWApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQ1JFQVRFIFRBQkxFIFwicm9sZVwiIChcImlkXCIgdXVpZCBOT1QgTlVMTCBERUZBVUxUIHV1aWRfZ2VuZXJhdGVfdjQoKSwgXCJjcmVhdGVkQXRcIiBUSU1FU1RBTVAgTk9UIE5VTEwgREVGQVVMVCBub3coKSwgXCJ1cGRhdGVkQXRcIiBUSU1FU1RBTVAgTk9UIE5VTEwgREVGQVVMVCBub3coKSwgXCJuYW1lXCIgXCJwdWJsaWNcIi5cInJvbGVfbmFtZV9lbnVtXCIgTk9UIE5VTEwgREVGQVVMVCAnTUVNQkVSJywgQ09OU1RSQUlOVCBcIlBLX2IzNmJjZmUwMmZjOGRlM2M1N2E4YjIzOTFjMlwiIFBSSU1BUlkgS0VZIChcImlkXCIpKWApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQ1JFQVRFIFRBQkxFIFwidXNlclwiIChcImlkXCIgdXVpZCBOT1QgTlVMTCBERUZBVUxUIHV1aWRfZ2VuZXJhdGVfdjQoKSwgXCJjcmVhdGVkQXRcIiBUSU1FU1RBTVAgTk9UIE5VTEwgREVGQVVMVCBub3coKSwgXCJ1cGRhdGVkQXRcIiBUSU1FU1RBTVAgTk9UIE5VTEwgREVGQVVMVCBub3coKSwgXCJmaXJzdE5hbWVcIiB0ZXh0LCBcImxhc3ROYW1lXCIgdGV4dCwgXCJuaWNrbmFtZVwiIHRleHQgTk9UIE5VTEwsIFwiZW1haWxcIiB0ZXh0IE5PVCBOVUxMLCBcInBhc3N3b3JkXCIgdGV4dCBOT1QgTlVMTCwgXCJyb2xlSWRcIiB1dWlkLCBDT05TVFJBSU5UIFwiVVFfZTIzNjQyODEwMjdiOTI2Yjg3OWZhMmZhMWUwXCIgVU5JUVVFIChcIm5pY2tuYW1lXCIpLCBDT05TVFJBSU5UIFwiUEtfY2FjZTRhMTU5ZmY5ZjI1MTJkZDQyMzczNzYwXCIgUFJJTUFSWSBLRVkgKFwiaWRcIikpYCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KGBBTFRFUiBUQUJMRSBcInJldmlld1wiIEFERCBDT05TVFJBSU5UIFwiRktfZDNjYmZmM2U0ZmE2NjdiODI1Mzc0Zjg2NjFlXCIgRk9SRUlHTiBLRVkgKFwiY29mZmVlXCIpIFJFRkVSRU5DRVMgXCJjb2ZmZWVcIihcImlkXCIpIE9OIERFTEVURSBDQVNDQURFIE9OIFVQREFURSBOTyBBQ1RJT05gKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYEFMVEVSIFRBQkxFIFwicmV2aWV3XCIgQUREIENPTlNUUkFJTlQgXCJGS181MzRiOWNjYzYyZDgxMjgwZGE1NzhkZTZmZTZcIiBGT1JFSUdOIEtFWSAoXCJ1c2VyXCIpIFJFRkVSRU5DRVMgXCJ1c2VyXCIoXCJpZFwiKSBPTiBERUxFVEUgTk8gQUNUSU9OIE9OIFVQREFURSBOTyBBQ1RJT05gKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYEFMVEVSIFRBQkxFIFwidXNlclwiIEFERCBDT05TVFJBSU5UIFwiRktfYzI4ZTUyZjc1OGU3YmJjNTM4MjhkYjkyMTk0XCIgRk9SRUlHTiBLRVkgKFwicm9sZUlkXCIpIFJFRkVSRU5DRVMgXCJyb2xlXCIoXCJpZFwiKSBPTiBERUxFVEUgTk8gQUNUSU9OIE9OIFVQREFURSBOTyBBQ1RJT05gKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYENSRUFURSBUQUJMRSBcInF1ZXJ5LXJlc3VsdC1jYWNoZVwiIChcImlkXCIgU0VSSUFMIE5PVCBOVUxMLCBcImlkZW50aWZpZXJcIiBjaGFyYWN0ZXIgdmFyeWluZywgXCJ0aW1lXCIgYmlnaW50IE5PVCBOVUxMLCBcImR1cmF0aW9uXCIgaW50ZWdlciBOT1QgTlVMTCwgXCJxdWVyeVwiIHRleHQgTk9UIE5VTEwsIFwicmVzdWx0XCIgdGV4dCBOT1QgTlVMTCwgQ09OU1RSQUlOVCBcIlBLXzZhOThmNzU4ZDhiZmQwMTBlN2UxMGZmZDNkM1wiIFBSSU1BUlkgS0VZIChcImlkXCIpKWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkb3duKHF1ZXJ5UnVubmVyOiBRdWVyeVJ1bm5lcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUQUJMRSBcInF1ZXJ5LXJlc3VsdC1jYWNoZVwiYCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KGBBTFRFUiBUQUJMRSBcInVzZXJcIiBEUk9QIENPTlNUUkFJTlQgXCJGS19jMjhlNTJmNzU4ZTdiYmM1MzgyOGRiOTIxOTRcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQUxURVIgVEFCTEUgXCJyZXZpZXdcIiBEUk9QIENPTlNUUkFJTlQgXCJGS181MzRiOWNjYzYyZDgxMjgwZGE1NzhkZTZmZTZcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgQUxURVIgVEFCTEUgXCJyZXZpZXdcIiBEUk9QIENPTlNUUkFJTlQgXCJGS19kM2NiZmYzZTRmYTY2N2I4MjUzNzRmODY2MWVcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUQUJMRSBcInVzZXJcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUQUJMRSBcInJvbGVcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUWVBFIFwicHVibGljXCIuXCJyb2xlX25hbWVfZW51bVwiYCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KGBEUk9QIFRBQkxFIFwicmV2aWV3XCJgKTtcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucXVlcnkoYERST1AgVEFCTEUgXCJjb2ZmZWVcImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUWVBFIFwicHVibGljXCIuXCJjb2ZmZWVfY29mZmVlc3RhdHVzX2VudW1cImApO1xuICAgICAgICBhd2FpdCBxdWVyeVJ1bm5lci5xdWVyeShgRFJPUCBUWVBFIFwicHVibGljXCIuXCJjb2ZmZWVfYnVybnRsdmxfZW51bVwiYCk7XG4gICAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnF1ZXJ5KGBEUk9QIFRZUEUgXCJwdWJsaWNcIi5cImNvZmZlZV90eXBlX2VudW1cImApO1xuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbImFscGhhMTY3NTg3NjUwMDYwNiIsIm5hbWUiLCJ1cCIsInF1ZXJ5UnVubmVyIiwicXVlcnkiLCJkb3duIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7YUFBQUE7O0FBQU4sTUFBTUE7SUFDVEMsT0FBTyxxQkFBb0I7SUFFM0IsTUFBYUMsR0FBR0MsV0FBd0IsRUFBaUI7UUFDckQsTUFBTUEsWUFBWUMsS0FBSyxDQUFDLENBQUMsa0VBQWtFLENBQUM7UUFDNUYsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsZ0dBQWdHLENBQUM7UUFDMUgsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsK0ZBQStGLENBQUM7UUFDekgsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsbWhCQUFtaEIsQ0FBQztRQUM3aUIsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsOFlBQThZLENBQUM7UUFDeGEsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsZ0VBQWdFLENBQUM7UUFDMUYsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsMlJBQTJSLENBQUM7UUFDclQsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsNlpBQTZaLENBQUM7UUFDdmIsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsMkpBQTJKLENBQUM7UUFDckwsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMseUpBQXlKLENBQUM7UUFDbkwsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMseUpBQXlKLENBQUM7UUFDbkwsTUFBTUQsWUFBWUMsS0FBSyxDQUFDLENBQUMsNFBBQTRQLENBQUM7SUFDMVI7SUFFQSxNQUFhQyxLQUFLRixXQUF3QixFQUFpQjtRQUN2RCxNQUFNQSxZQUFZQyxLQUFLLENBQUMsQ0FBQywrQkFBK0IsQ0FBQztRQUN6RCxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxtRUFBbUUsQ0FBQztRQUM3RixNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxxRUFBcUUsQ0FBQztRQUMvRixNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxxRUFBcUUsQ0FBQztRQUMvRixNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztRQUM3RCxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3QyxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3QyxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyw2Q0FBNkMsQ0FBQztRQUN2RSxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQztRQUNuRSxNQUFNRCxZQUFZQyxLQUFLLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQztJQUNuRTtBQUVKIn0=
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6

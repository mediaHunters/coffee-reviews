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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/infrastructure/database/repository/common/Repository.ts
var Repository_exports = {};
__export(Repository_exports, {
  Repository: () => Repository
});
module.exports = __toCommonJS(Repository_exports);
var import_typeorm = require("typeorm");
var import_inversify = require("inversify");
var Repository = class extends import_typeorm.AbstractRepository {
  constructor(entity) {
    super();
    this.entity = entity;
  }
  async find(id) {
    return this.getDBRepository().findOne(id);
  }
  findBy(condition) {
    return this.getDBRepository().find(condition);
  }
  async findMany(ids) {
    return this.getDBRepository().findByIds(ids);
  }
  async findAll() {
    return this.getDBRepository().find();
  }
  async query(query, parameters) {
    return this.getDBRepository().query(query, parameters);
  }
  async update(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async updateAll(condition, data) {
    return !!await this.getDBRepository().update(condition, data);
  }
  async delete(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async deleteAll(condition) {
    return !!await this.getDBRepository().delete(condition);
  }
  async remove(entity) {
    return this.getDBRepository().remove(entity);
  }
  async removeAll(entities) {
    return this.getDBRepository().remove(entities);
  }
  async save(entity) {
    return this.getDBRepository().save(entity);
  }
  async saveAll(entities) {
    return this.getDBRepository().save(entities);
  }
  custom() {
    return this.getDBRepository();
  }
  getConnectionName() {
    return process.env.ORM_CONNECTION;
  }
  getDBRepository() {
    return (0, import_typeorm.getRepository)(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  (0, import_inversify.injectable)()
], Repository);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Repository
});
//# sourceMappingURL=Repository.js.map
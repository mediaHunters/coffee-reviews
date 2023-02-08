import {
  __decorateClass
} from "./chunk-CT3ESYKG.mjs";

// src/infrastructure/database/repository/common/Repository.ts
import { AbstractRepository, getRepository } from "typeorm";
import { injectable } from "inversify";
var Repository = class extends AbstractRepository {
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
    return getRepository(this.entity, this.getConnectionName());
  }
};
Repository = __decorateClass([
  injectable()
], Repository);

export {
  Repository
};
//# sourceMappingURL=chunk-WWH26BVW.mjs.map
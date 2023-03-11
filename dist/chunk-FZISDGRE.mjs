// src/core/domainServices/Coffee/requests/UnitOfWork/command/AddCoffeeUnitOfWorkRepositoryCommand.ts
var CreateCoffeeUnitOfWorkRepositoryCommand = class {
  constructor(brand, name, type, imgUrl, description, burntLvl, reflink, CoffeeStatus) {
    this.brand = brand;
    this.name = name;
    this.type = type;
    this.imgUrl = imgUrl;
    this.description = description;
    this.burntLvl = burntLvl;
    this.reflink = reflink;
    this.CoffeeStatus = CoffeeStatus;
  }
};

export {
  CreateCoffeeUnitOfWorkRepositoryCommand
};
//# sourceMappingURL=chunk-FZISDGRE.mjs.map
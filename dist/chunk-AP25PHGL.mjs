// src/core/domainServices/Coffee/requests/repository/command/CreateCoffeeRepositoryCommand.ts
var CreateCoffeeRepositoryCommand = class {
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
  CreateCoffeeRepositoryCommand
};
//# sourceMappingURL=chunk-AP25PHGL.mjs.map
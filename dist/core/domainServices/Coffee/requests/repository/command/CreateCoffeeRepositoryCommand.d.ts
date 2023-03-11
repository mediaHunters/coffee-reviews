declare class CreateCoffeeRepositoryCommand {
    readonly brand: string;
    readonly name: string;
    readonly type: string;
    readonly imgUrl: string;
    readonly description: string;
    readonly burntLvl: string;
    readonly reflink: string;
    readonly CoffeeStatus: string;
    constructor(brand: string, name: string, type: string, imgUrl: string, description: string, burntLvl: string, reflink: string, CoffeeStatus: string);
}

export { CreateCoffeeRepositoryCommand };

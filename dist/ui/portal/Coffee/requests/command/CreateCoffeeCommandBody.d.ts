declare class CreateCoffeeCommandBody {
    readonly brand: string;
    readonly name: string;
    readonly type: string;
    readonly imgUrl: string;
    readonly description: string;
    readonly burntLvl: string;
    readonly CoffeeStatus: string;
    readonly reflink?: string | undefined;
    constructor(brand: string, name: string, type: string, imgUrl: string, description: string, burntLvl: string, CoffeeStatus: string, reflink?: string | undefined);
}

export { CreateCoffeeCommandBody };

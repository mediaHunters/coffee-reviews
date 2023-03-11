declare class Coffee {
    readonly id: string;
    readonly brand: string;
    readonly name: string;
    readonly type: string;
    readonly imgUrl: string;
    readonly description: string;
    readonly burntLvl: string;
    readonly createdAt: Date;
    readonly reviews: number;
    readonly reflink: string;
    constructor(id: string, brand: string, name: string, type: string, imgUrl: string, description: string, burntLvl: string, createdAt: Date, reviews: number, reflink: string);
}

export { Coffee };

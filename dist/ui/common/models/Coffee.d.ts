import { Review } from '../../../core/domain/Review/Review.js';

declare class Coffee {
    readonly id: string;
    readonly brand: string;
    readonly name: string;
    readonly type: string;
    readonly imgUrl: string;
    readonly description: string;
    readonly burntLvl: string;
    readonly createdAt: Date;
    readonly reviews: Review;
    readonly reflink: string;
    constructor(id: string, brand: string, name: string, type: string, imgUrl: string, description: string, burntLvl: string, createdAt: Date, reviews: Review, reflink: string);
}

export { Coffee };

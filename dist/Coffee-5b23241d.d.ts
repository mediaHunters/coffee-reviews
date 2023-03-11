import Model from './infrastructure/database/entities/Base.js';

declare class Role extends Model {
    name: string;
    user: User;
}

declare class User extends Model {
    firstName?: string;
    lastName?: string;
    nickname: string;
    email: string;
    password: string;
    role: Role;
    reviews: Review[];
    toJson(): any;
}

declare class Review extends Model {
    rating: number;
    look: number;
    smell: number;
    taste: number;
    coffeeId: string;
    coffee: Coffee;
    userId: string;
    user: User;
}

declare class Coffee extends Model {
    brand: string;
    name: string;
    type: string;
    imgUrl: string;
    description: string;
    burntLvl: string;
    reflink: string;
    CoffeeStatus: string;
    reviews: Review[];
}

export { Coffee as C, Review as R, User as U, Role as a };

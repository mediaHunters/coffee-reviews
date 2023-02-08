declare class User {
    readonly id: string;
    readonly nickname: string;
    readonly email: string;
    readonly role: string;
    constructor(id: string, nickname: string, email: string, role: string);
}

export { User };

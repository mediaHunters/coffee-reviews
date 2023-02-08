import { Seeder, Factory } from 'typeorm-seeding';

declare class UserSeed implements Seeder {
    run(factory: Factory): Promise<void>;
    private prepareAdminUserSeeds;
    private prepareMemberUserSeeds;
}

export { UserSeed };

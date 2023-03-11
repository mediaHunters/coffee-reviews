import { interfaces } from 'inversify-express-utils';
import { User } from '../../../../../models/User.js';

declare class Principal implements interfaces.Principal {
    details: User | undefined;
    constructor(details: User | undefined);
    isAuthenticated(): Promise<boolean>;
    isResourceOwner(resourceId: any): Promise<boolean>;
    isInRole(role: string): Promise<boolean>;
}

export { Principal };

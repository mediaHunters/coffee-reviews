import { User } from '../../../../../models/User.js';

type TokenPayload = {
    user: User;
};

export { TokenPayload };

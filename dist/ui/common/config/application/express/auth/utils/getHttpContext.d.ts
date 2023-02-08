import { Request } from 'express';
import { Principal } from '../models/Principal.js';
import 'inversify-express-utils';
import '../../../../../models/User.js';

declare const getCurrentUser: (request: Request) => Principal;

export { getCurrentUser };

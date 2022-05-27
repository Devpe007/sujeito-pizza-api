import { Router } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';

import { isAuthenticated } from '../middlewares/authentication/isAuthenticated';

const router = Router();

router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/session', new AuthUserController().handle);

router.post('/users', new CreateUserController().handle);

export { router };

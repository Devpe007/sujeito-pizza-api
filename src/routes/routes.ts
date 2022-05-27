import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { AuthUserController } from '../controllers/AuthUserController';

const router = Router();

router.post('/session', new AuthUserController().handle);

router.post('/users', new CreateUserController().handle);

export { router };

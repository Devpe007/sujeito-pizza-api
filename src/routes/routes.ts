import { Router } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';

import { CreateCategoryController } from '../controllers/category/CreateCategoryController';

import { isAuthenticated } from '../middlewares/authentication/isAuthenticated';

const router = Router();

// -- ROTAS USER --

router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/session', new AuthUserController().handle);

router.post('/users', new CreateUserController().handle);

// -- ROTAS CATEGORY --

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

export { router };

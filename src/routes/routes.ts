import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/multer';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';

import { CreateCategoryController } from '../controllers/category/CreateCategoryController';
import { ListCategoryController } from '../controllers/category/ListCategoryController';

import { CreateProductController } from '../controllers/product/CreateProductController';
import { ListByCategoryController } from '../controllers/product/ListByCategoryController';

import { isAuthenticated } from '../middlewares/authentication/isAuthenticated';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// -- ROTAS USER --

router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/session', new AuthUserController().handle);

router.post('/users', new CreateUserController().handle);

// -- ROTAS CATEGORY --

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/category', isAuthenticated, new ListCategoryController().handle);

// -- ROTAS PRODUCT --

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

export { router };

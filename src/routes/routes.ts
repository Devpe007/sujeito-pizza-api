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

import { CreateOrderController } from '../controllers/order/CreateOrderController';
import { RemoveOrderController } from '../controllers/order/RemoveOrderController';
import { SendOrderController } from '../controllers/order/SendOrderController';

import { AddItemController } from '../controllers/order/item/AddItemController';
import { RemoveItemController } from '../controllers/order/item/RemoveItemController';

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

// -- ROTAS ORDER --

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);

router.put('/order/send', isAuthenticated, new SendOrderController().handle);

export { router };

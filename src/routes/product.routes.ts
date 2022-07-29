import { Router } from 'express';

import ProductsController from '../controller/ProductController';

const productsRouter = Router();

const productsController = new ProductsController();

console.log(this);

productsRouter.get('/products', (req, res) => productsController.getAll(req, res));

export default productsRouter;
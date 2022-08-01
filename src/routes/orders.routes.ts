import { Router } from 'express';

import OrdersController from '../controller/OrdersControlles';

const ordersRouter = Router();

const ordersController = new OrdersController();

console.log(this);

ordersRouter.get('/orders', (req, res) => ordersController.listAll(req, res));

export default ordersRouter;
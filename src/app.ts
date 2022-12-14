import express from 'express';

import productsRouter from './routes/product.routes';
import usersRouter from './routes/user.routes';
import ordersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use(usersRouter);

app.use(ordersRouter);

export default app;

import { Router } from 'express';

import UserController from '../controller/UserController';

const userRouter = Router();

const userController = new UserController();

console.log(this);

userRouter.post('/users', (req, res) => userController.create(req, res));

export default userRouter;
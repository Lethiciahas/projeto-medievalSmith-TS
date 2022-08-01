import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import UserService from '../services/user.service';

const secret = 'brucewaineisbatman';

class UserController {
  public service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const user = await this.service.create(req.body);
    const token = jwt.sign({ id: user.id }, secret);
    return res.status(201).json({ token });
  }
}
// token
export default UserController;
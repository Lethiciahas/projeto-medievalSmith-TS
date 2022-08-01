import { Request, Response } from 'express';

import OrderService from '../services/order.service';

class OrdersController {
  public service: OrderService;

  constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    const orders = await this.service.listAll();
    return res.status(200).json(orders);
  }
}

export default OrdersController;
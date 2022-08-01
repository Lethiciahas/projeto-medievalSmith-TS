import connection from '../models/connection';

import OrdersModel from '../models/order.model';

import { Orders } from '../interfaces/db_interfaces';

class OrdersService {
  public model: OrdersModel;

  constructor(model: OrdersModel = new OrdersModel(connection)) {
    this.model = model;
  }

  listAll = async (): Promise<Orders[]> => this.model.listAll();
}

export default OrdersService;
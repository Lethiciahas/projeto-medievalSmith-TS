import connection from '../models/connection';

import OrdersModel from '../models/product.model';

// import { Orders } from '../interfaces/db_interfaces';

class OrdersService {
  public model: OrdersModel;

  constructor(model: OrdersModel = new OrdersModel(connection)) {
    this.model = model;
  }

//  getAll = async (): Promise<Orders[]> => this.model.getAll();
}

export default OrdersService;
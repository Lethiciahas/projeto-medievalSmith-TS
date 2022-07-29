import connection from '../models/connection';

import ProductsModel from '../models/ProductModel';

import { Products } from '../interfaces/db_interfaces';

class ProductsService {
  public model: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel(connection)) {
    this.model = model;
  }

  getAll = async (): Promise<Products[]> => this.model.getAll();
}

export default ProductsService;
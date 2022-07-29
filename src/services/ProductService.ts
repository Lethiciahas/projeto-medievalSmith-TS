// import connection from '../models/connection';

import ProductsModel from '../models/ProductModel';

import { Products } from '../interfaces/db_interfaces';

class ProductsService {
  public productsModel: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel()) {
    this.productsModel = model;
  }

  getAll = async (): Promise<Products[]> => this.productsModel.getAll();
}

export default ProductsService;
import { Request, Response } from 'express';

import ProductsService from '../services/ProductService';

class ProductsController {
  public service: ProductsService;

  constructor(service: ProductsService = new ProductsService()) {
    this.service = service;
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const products = await this.service.create(req.body);
    return res.status(201).json(products);
  }
}

export default ProductsController;
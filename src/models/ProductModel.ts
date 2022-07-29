import { Pool } from 'mysql2/promise';
import { Products } from '../interfaces/db_interfaces';

class ProductsModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<Products[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection.query(sql);
    return rows as Products[];
  };
}
export default ProductsModel;

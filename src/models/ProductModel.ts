import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  create = async (product: Products): Promise<Products> => {
    const { name, amount } = product;
    const result = await this.connection
      .query<ResultSetHeader>(`INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);`, [name, amount]);
    const [{ insertId }] = result;
    return { id: insertId, ...product };
  };  
}
export default ProductsModel;

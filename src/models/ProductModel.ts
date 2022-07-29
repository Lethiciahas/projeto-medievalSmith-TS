import connection from './connection';
import { Products } from '../interfaces/db_interfaces';

class ProductModel {
  getAll = async (): Promise<Products[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.query(sql);
    return result as Products[];
  };
}
export default ProductModel;

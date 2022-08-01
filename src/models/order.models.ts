import { Pool } from 'mysql2/promise';
import { Orders } from '../interfaces/db_interfaces';

class OrdersModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<Orders[]> => {
    const sql = 'SELECT * FROM Trybesmith.Orders';
    const [rows] = await this.connection.query(sql);
    return rows as Orders[];
  }; // preciso retornar os ids
}
export default OrdersModel;
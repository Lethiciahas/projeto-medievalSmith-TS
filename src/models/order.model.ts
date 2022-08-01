import { Pool } from 'mysql2/promise';
import { Orders } from '../interfaces/db_interfaces';

class OrdersModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  listAll = async (): Promise<Orders[]> => {
    const sql = `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as P 
    ON O.id = P.orderId
    GROUP BY O.id
    ORDER BY O.userId`;
    const [orders] = await this.connection.query(sql);
    return orders as Orders[];
  };
  // json_arrayagg para desnormalizar relacionamento entre duas ou mais tabelas e criar uma lista com atributos https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlrf/JSON_ARRAYAGG.html#GUID-6D56077D-78DE-4CC0-9498-225DDC42E054
}
export default OrdersModel;
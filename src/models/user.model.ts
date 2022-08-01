import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/db_interfaces';

class UserModel {
  public connection: Pool;
  
  public constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (users: User): Promise<User> => {
    const { username, classe, level, password } = users;
    const result = await this.connection
      .query<ResultSetHeader>(`INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);`, [username, classe, level, password]);
    const [{ insertId }] = result;
    return { id: insertId, ...users };
  };  
}
export default UserModel;

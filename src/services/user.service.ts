import connection from '../models/connection';

import UserModel from '../models/user.model';

import { User } from '../interfaces/db_interfaces';

class UserService {
  public model: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.model = model;
  }

  create = async (users: User): Promise<User> => this.model.create(users);
}

export default UserService;
import { User } from "../../entities/User";
import { IUsersRespository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRespository {
  private users: User[] = [];
  
  async findByEmail(email: string): Promise<User | boolean> {
    const user = this.users.find(user => user.email === email);

    if(!user) return false;

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
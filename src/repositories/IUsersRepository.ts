import { User } from "../entities/User";

export interface IUsersRespository {
  findByEmail(email: string): Promise<User | boolean>;
  save(user: User): Promise<void>;
}
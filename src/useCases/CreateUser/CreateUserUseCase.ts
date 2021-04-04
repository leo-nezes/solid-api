import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRespository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
  // No Typescript, quando utilizamos um private dentro do construtor, ele automaticamente cria uma propriedade privada e adiciona à classe. (https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)

  // private usersRepository: IUsersRespository está seguindo o DIP (Dependency Inversion Principle)

  constructor(
    private usersRepository: IUsersRespository,
    private mailProviders: IMailProvider
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProviders.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe Meu App',
        email: 'meuapp@email.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer o login.</p>'
    });
  }
}
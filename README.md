Aplicação desenvolvida seguindo os princípios SOLID.
Fonte: [Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc&ab_channel=Rocketseat)

Onde estão sendo aplicados os princípios SOLID?

S: Single Responsability Principle
A classe CreateUserUseCase tem apenas uma responsabilidade; criar o usuário. A classe não sabe se o usuário será salvo em um banco de dados ou em JSON. Sua única responsabilidade é verificar se o usuário não existe e criá-lo.

L: Liskov Substitution Principle
O construtor de CreateUserUseCase recebe um usersRepository do tipo IUsersRespository. O IUsersRespository é uma interface que define os métodos que existem no repositório. Desta forma não importa qual repositório seja passado - um postgres, mongo ou mysql - se possuir esses métodos, irá funcionar sem problema.

D: Dependency Inversion Principle
Quando o construtor recebe usersRepository do tipo IUsersRespository, isso faz com que a classe CreateUserUseCase não dependa diretamente de uma classe concreta, que possua todas as implementações dos métodos, e sim de uma "ferramenta" mais abstrata - uma interface.
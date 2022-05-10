export class CreateUserUseCase {
  #userRepository;
  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  execute = (request) => {
    const input = {
      id: Math.round(Math.random() * 100000),
      ...request.params,
      ...request.query,
    };

    // Requisição no banco de dados
    this.#userRepository.create(input);

    // callback
    return input;
  };
}

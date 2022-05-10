export class UpdateUserUseCase {
  // #userRepository
  #userRepository;
  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  execute = (id, data) => {
    if (!id) return { error: "id should be must provide" };
    return this.#userRepository.update(id, { ...data.query });
  };
}

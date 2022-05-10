// camada entre banco de dados e aplicação
export class UserRepository {
  #users = [];
  constructor() {}

  create(data) {
    this.#users.push(data);
  }

  list() {
    return this.#users;
  }

  update(id, data) {
    const user = this.#users.findIndex((user) => user.id == Number(id));

    if (user == null || user == undefined) return { error: "User not found" };

    this.#users[user] = { ...this.#users[user], ...data };

    return this.#users[user];
  }

  delete(id) {
    const user = this.#users.findIndex((user) => user.id == Number(id));

    if (user == null || user == undefined) return { error: "User not found" };

    this.#users.slice(user);
  }

  read(id) {
    const user = this.#users.findIndex((user) => user.id == Number(id));
    if (user == null || user == undefined) return { error: "User not found" };
    return this.#users[user];
  }
}

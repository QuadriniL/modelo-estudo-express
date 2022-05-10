// import ej6
import Express, { json } from "express";
// Import Node Nativo
// const Express = require("express");
import { UserRepository } from "./repositories/UserRepository.mjs";
import { CreateUserUseCase } from "./useCases/createUser/createUserUseCase.mjs";
import { UpdateUserUseCase } from "./useCases/updateUser/updateUserUseCase.mjs";

const server = Express();

server.use(json());

const userRepository = new UserRepository();

// Criação
server.get("/users/create/:nome", (req, res) => {
  res.json(new CreateUserUseCase(userRepository).execute(req));
});

// edição
server.get("/users/update/:id", (req, res) => {
  res.json(new UpdateUserUseCase(userRepository).execute(req.params.id, req));
});

// Listagem
server.get("/users", (request, response) => {
  response.json(userRepository.list());
});

// deleção

// mostrar um usuario

// define a porta do servidor
const port = 3333;
server.listen(port);
console.log(`Server is running on http://localhost:${port}`);

// Params - url/:Lucas
// Body - { dado: "Doa" }
// Query - url/?nickname=nomezinho

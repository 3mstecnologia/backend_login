const express = require("express");
const routes = express.Router();

const LoginController = require("./controllers/LoginController");
//const UploadController = require("./controllers/uploadController");
const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  res.send("Hello World!");
});
routes.get("/teste", (req, res) => {
  res.send("Hello World! Teste");
});

routes.get(
  "/user/listatodosusuarios",

  UserController.listaTodosUsuarios
);
routes.post("/user/cadastrausuario", UserController.cadastraUsuario);
routes.post("/login", LoginController.login);
routes.post("/recuperaUsuario", LoginController.repucuperaDadosUsuario);
module.exports = routes;

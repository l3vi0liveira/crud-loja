const models = require("../models");

const tabelaUsuario = models.Usuario;

exports.listar = async (req, res) => {
  const usuarios = await tabelaUsuario.findAll();

  return res.json(usuarios);
};

exports.criar = async (req, res) => {
  const usuario = await tabelaUsuario.create(req.body);

  return res.json(usuario);
};

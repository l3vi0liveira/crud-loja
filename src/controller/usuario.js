const models = require("../models");
const tabelaUsuario = models.Usuario;
const tabelaPedido = models.Pedido;
const tabelaEndereco = models.Endereco;
const validator = require("validator");

exports.listar = async (req, res) => {
  const usuarios = await tabelaUsuario.findAll({
    attributes: { exclude: ["senha"] },
    include: [
      { model: tabelaPedido, as: "pedido" },
      { model: tabelaEndereco, as: "endereco" },
    ],
  });

  return res.json(usuarios);
};

exports.criar = async (req, res) => {
  const usuario = await tabelaUsuario.create(req.body);
  return res.json(usuario);
};

exports.deletar = async (req, res) => {
  const recebeParametroDelete = req.params.id;
  tabelaUsuario.destroy({ where: { id: recebeParametroDelete } });
  return res.json({
    message: "Usuário: " + recebeParametroDelete + " deletado com sucesso",
  });
};

exports.deletarErro = async (req, res) => {
  return res.json({ message: "Por favor, digite um ID a ser deletado" });
};

exports.alterar = async (req, res) => {
  const recebeParametroAltera = req.params.id;
  const { nome, email, senha } = req.body;
  await tabelaUsuario.update(
    { nome: nome, email: email, senha: senha },
    { where: { id: recebeParametroAltera } }
  );
  const usuarios = await tabelaUsuario.findByPk(recebeParametroAltera);
  return res.json({ message: usuarios });
};

exports.alterarErro = async (req, res) => {
  return res.json({ message: "Por favor, digite um ID a ser alterado" });
};

exports.validaUsuario = (req, res, next) => {
  const { nome, email, senha } = req.body;
  const recebeEmail = validator.isEmail(email);
  if (!recebeEmail) {
    res.json({ message: "Por favor, digite um e-mail valido" });
  }
  if (!nome || !senha) {
    res.json({ message: "Por favor, preencha todos os campos" });
  } else {
    next();
  }
};

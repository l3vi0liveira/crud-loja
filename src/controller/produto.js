const models = require("../models");

const tabelaProduto = models.Produto;

exports.listar = async (req, res) => {
  const produtos = await tabelaProduto.findAll();

  return res.json(produtos);
};

exports.criar = async (req, res) => {
  const novoProduto = await tabelaProduto.create(req.body);

  return res.json(novoProduto);
};

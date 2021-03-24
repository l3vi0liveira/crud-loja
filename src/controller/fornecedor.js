const models = require("../models");

const tabelaFornecedor = models.Fornecedor;

exports.listar = async (req, res) => {
  const fornecedores = await tabelaFornecedor.findAll();

  return res.json(fornecedores);
};

exports.criar = async (req, res) => {
  const novoFornecedor = await tabelaFornecedor.create(req.body);

  return res.json(novoFornecedor);
};

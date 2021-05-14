const models = require("../models");
const { propfind } = require("../routes");
const tabelaProduto = models.Produto;
const tabelaFornecedor = models.Fornecedor;

exports.listar = async (req, res) => {
  const produtos = await tabelaProduto.findAll({ include: ["fornecedor"] });
  return res.json(produtos);
};

exports.criar = async (req, res) => {
  const produto = await tabelaProduto.create(req.body);
  return res.json(produto);
};

exports.deletar = async (req, res) => {
  const recebeParametroDelete = req.params.id;
  tabelaProduto.destroy({ where: { id: recebeParametroDelete } });
  return res.json({
    message: "Produto: " + recebeParametroDelete + " deletado com sucesso",
  });
};

exports.alterar = async (req, res) => {
  const recebeParametroAltera = req.params.id;
  const { nome, quantidade, valor, descricao } = req.body;
  await tabelaProduto.update(
    { nome: nome, quantidade: quantidade, valor: valor, descricao: descricao },
    { where: { id: recebeParametroAltera } }
  );
  const produtos = await tabelaProduto.findByPk(recebeParametroAltera);
  return res.json({ message: produtos });
};

exports.validaProduto = async (req, res, next) => {
  const { fornecedorId, nome, quantidade, valor, descricao } = req.body;
  const procuraId = await tabelaFornecedor.findByPk(fornecedorId);
  if (!procuraId) {
    res.json({ message: "Por favor, cadastre um Fornecedor valido" });
  }
  if (!fornecedorId || !nome || !quantidade || !valor || !descricao) {
    res.json({ message: "Por favor, digite todos os campos" });
  } else {
    next();
  }
};

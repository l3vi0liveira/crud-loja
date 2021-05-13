const models = require("../models");
const { propfind } = require("../routes");
const tabelaFornecedor = models.Fornecedor;
const tabelaProduto = models.tabelaProduto;

exports.listar = async (req, res) => {
  const fornecedores = await tabelaFornecedor.findAll(
    { include: ["produtos"] });

  return res.json(fornecedores);
};

exports.criar = async (req, res) => {
  const fornecedor = await tabelaFornecedor.create(req.body);
  return res.json(fornecedor);
};

exports.deletar = async (req, res) => {
  const recebeParametroDelete = (req.params.id)
  tabelaFornecedor.destroy({ where: { id: recebeParametroDelete } });
  return res.json({ message: "Fornecedor: " + recebeParametroDelete + " deletado com sucesso" })
}

exports.alterar = async (req, res) => {
  const recebeParametroAltera = (req.params.id)
  const { nome, cnpj } = req.body
  await tabelaFornecedor.update({ nome: nome, cnpj: cnpj },
    { where: { id: recebeParametroAltera } })
  const fornecedores = await tabelaFornecedor.findByPk(recebeParametroAltera);
  return res.json({ message: fornecedores })
}
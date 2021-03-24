const models = require("../models");

const tabelaEndereco = models.Endereco;

exports.listar = async (req, res) => {
  const enderecos = await tabelaEndereco.findAll({
    include: ["usuario"],
  });

  return res.json(enderecos);
};

exports.criar = async (req, res) => {
  const novoEndereco = await tabelaEndereco.create(req.body);

  return res.json(novoEndereco);
};

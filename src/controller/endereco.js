const models = require("../models");
const { propfind } = require("../routes");
const tabelaEndereco = models.Endereco;
const tabelaUsuario = models.Usuario;

exports.listar = async (req, res) => {
  const endereco = await tabelaEndereco.findAll({
    include: [
      {
        model: tabelaUsuario,
        as: "usuario",
        attributes: { exclude: ["senha"] },
      },
    ],
  });
  return res.json(endereco);
};

exports.criar = async (req, res) => {
  const endereco = await tabelaEndereco.create(req.body);
  return res.json(endereco);
};

exports.deletar = async (req, res) => {
  const recebeParametroDelete = req.params.id;
  tabelaEndereco.destroy({ where: { id: recebeParametroDelete } });
  return res.json({
    message: "Endereço: " + recebeParametroDelete + " deletado com sucesso",
  });
};

exports.alterar = async (req, res) => {
  const recebeParametroAltera = req.params.id;
  const { rua, numero, complemento, bairro, cep, cidade, estado } = req.body;
  await tabelaEndereco.update(
    {
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cep: cep,
      cidade: cidade,
      estado: estado,
    },
    { where: { id: recebeParametroAltera } }
  );
  const enderecos = await tabelaEndereco.findByPk(recebeParametroAltera);
  return res.json({ message: enderecos });
};

const models = require("../models");
const { propfind } = require("../routes");
const tabelaPedido = models.Pedido;
const tabelaUsuario = models.Usuario;

exports.listar = async (req, res) => {
  const pedidos = await tabelaPedido.findAll({
    include: [
      {
        model: tabelaUsuario,
        as: "usuario",
        attributes: { exclude: ["senha"] },
        include: ["endereco"],
      },
    ],
  });
  return res.json(pedidos);
};

exports.criar = async (req, res) => {
  const pedidos = await tabelaPedido.create(req.body);
  return res.json(pedidos);
};

exports.deletar = async (req, res) => {
  const recebeParametroDelete = req.params.id;
  tabelaPedido.destroy({ where: { id: recebeParametroDelete } });
  return res.json({
    message: "Pedido: " + recebeParametroDelete + " deletado com sucesso",
  });
};

exports.alterar = async (req, res) => {
  const recebeParametroAltera = req.params.id;
  const { usuario, produto, valorTotal, estadoDoPedido } = req.body;
  await tabelaPedido.update(
    {
      usuario: usuario,
      produto: produto,
      valorTotal: valorTotal,
      estadoDoPedido: estadoDoPedido,
    },
    { where: { id: recebeParametroAltera } }
  );
  const pedidos = await tabelaPedido.findByPk(recebeParametroAltera);
  return res.json({ message: pedidos });
};

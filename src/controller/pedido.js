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
  const recebeParametroDeletar = req.params.id;
  const buscar = await tabelaPedido.destroy({
    where: { id: recebeParametroDeletar },
  });
  if (!buscar) {
    res.json({ message: "Por favor, digite um Id valido a ser deletado" });
  } else {
    return res.json({
      message: "Pedido: " + buscar + " deletado com sucesso",
    });
  }
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
  if (!pedidos) {
    res.json({ message: "Por favor, digite um Id valido de pedido" });
  }
  return res.json({ message: pedidos });
};

exports.validaPedido = async (req, res, next) => {
  const { usuarioId, produto, valorTotal, estadoDoPedido } = req.body;
  const procuraId = await tabelaUsuario.findByPk(usuarioId);
  if (!procuraId) {
    res.json({ message: "Por favor, cadastre um usuario valido" });
  }
  if (!usuarioId || !produto || !valorTotal || !estadoDoPedido) {
    res.json({ message: "Por favor, digite todos os campos" });
  } else {
    next();
  }
};

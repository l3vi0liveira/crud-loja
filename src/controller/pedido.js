const models = require("../models");

const tabelaPedido = models.Pedido;
const tabelaProduto = models.Produto;

exports.listar = async (req, res) => {
  const pedidos = await tabelaPedido.findAll({
    include: ["produtos"],
  });

  return res.json(pedidos);
};

exports.criar = async (req, res) => {
  const novoPedido = await tabelaPedido.create({
    ...req.body,
    status: "processando",
  });

  Promise.all(
    req.body.produtos.map(async (item) => {
      const produto = await tabelaProduto.findByPk(item);
      await novoPedido.addProduto(produto);
    })
  );

  return res.json(novoPedido);
};

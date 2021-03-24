const express = require("express");

const controllerUsuario = require("../controller/usuario");
const controllerEndereco = require("../controller/endereco");
const controllerPedido = require("../controller/pedido");
const controllerProduto = require("../controller/produto");
const controllerFornecedor = require("../controller/fornecedor");

const router = express.Router();

/**
 * USUARIO
 */
router.get("/usuario", controllerUsuario.listar);
router.post("/usuario", controllerUsuario.criar);

/**
 * ENDERECO
 */
router.get("/endereco", controllerEndereco.listar);
router.post("/endereco", controllerEndereco.criar);

/**
 * PEDIDO
 */
router.get("/pedido", controllerPedido.listar);
router.post("/pedido", controllerPedido.criar);

/**
 * FORNECEDOR
 */
router.get("/fornecedor", controllerFornecedor.listar);
router.post("/fornecedor", controllerFornecedor.criar);

/**
 * PRODUTO
 */
router.get("/produto", controllerProduto.listar);
router.post("/produto", controllerProduto.criar);

module.exports = router;

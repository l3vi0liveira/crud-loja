const express = require("express");

const conttrolerAutor = require("../controller/autor");
const conttrolerPost = require("../controller/post");
const conttrolerCategoria = require("../controller/categoria");
const conttrolerMarcador = require("../controller/marcador");

const router = express.Router();

//********Autor***********
router.post("/autor",conttrolerAutor.criar);
router.put("/autor", conttrolerAutor.alterar);
router.delete("/autor", conttrolerAutor.deletar);
router.get("/autor", conttrolerAutor.listar);

// //********Post***********
router.post("/post",conttrolerPost.criar);
router.put("/post", conttrolerPost.alterar);
router.delete("/post", conttrolerPost.deletar);
router.get("/post", conttrolerPost.listar);

// //********Categoria***********
router.post("/categoria",conttrolerCategoria.criar);
router.put("/categoria", conttrolerCategoria.alterar);
router.delete("/categoria", conttrolerCategoria.deletar);
router.get("/categoria", conttrolerCategoria.listar);

// //********Marcador***********
router.post("/marcador",conttrolerMarcador.criar);
router.put("/marcador", conttrolerMarcador.alterar);
router.delete("/marcador", conttrolerMarcador.deletar);
router.get("/marcador", conttrolerMarcador.listar);

module.exports = router;
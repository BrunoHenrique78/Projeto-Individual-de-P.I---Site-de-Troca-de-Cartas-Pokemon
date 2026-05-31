var express = require("express");
var router = express.Router();

var cartasController = require("../controllers/cartasController");

router.post("/salvar", function (req, res) {
    cartasController.salvar(req, res);
});

router.get("/total-cartas/:idUsuario", function (req, res) {
    cartasController.totalCartas(req, res);
});
router.get("/tipos-cartas/:idUsuario", function (req, res) {
    cartasController.tiposCartas(req, res);
});
router.get("/categorias-cartas/:idUsuario", function (req, res) {
    cartasController.categoriasCartas(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    cartasController.listar(req, res);
});

router.get("/ultima-carta/:idUsuario", function (req, res) {
    cartasController.ultimaCarta(req, res);
});

router.get("/cartas-repetidas/:idUsuario", function (req, res) {
    cartasController.cartasRepetidas(req, res);
});

router.get("/raridade-cartas/:idUsuario", function (req, res) {
    cartasController.raridadeCartas(req, res);
});

router.put("/descricao/:idCarta/:descricao", function (req, res) {
    cartasController.atualizarDescricao(req, res);
});

router.post("/publicar/:idCarta/:idUsuario", function (req, res) {
    cartasController.publicar(req, res);
});

router.get("/gerais", function (req, res) {
    cartasController.listarGerais(req, res);
});

router.get("/forum/:idCarta", function(req, res) {
    cartasController.listarMensagens(req, res);
});

router.post("/forum/:idCarta", function(req, res) {
    cartasController.enviarMensagem(req, res);
});

module.exports = router;
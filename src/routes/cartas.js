var express = require("express");
var router = express.Router();

var cartasController = require("../controllers/cartasController");

router.post("/salvar", function (req, res) {
    cartasController.salvar(req, res);
});

router.get("/total-cartas", function (req, res) {
    cartasController.totalCartas(req, res);
});
router.get("/tipos-cartas", function (req, res) {
    cartasController.tiposCartas(req, res);
});
router.get("/categorias-cartas", function (req, res) {
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

router.get("/raridade-cartas", function (req, res) {
    cartasController.raridadeCartas(req, res);
});

module.exports = router;
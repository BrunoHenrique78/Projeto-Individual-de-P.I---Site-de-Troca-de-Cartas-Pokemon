var cartasModel = require("../models/cartasModel");

function salvar(req, res) {

    var fkUsuario = req.body.fkUsuario;
    var cartaId = req.body.cartaId;
    var cartaNome = req.body.cartaNome;
    var cartaImagem = req.body.cartaImagem;
    var tipo = req.body.tipo ?? "desconhecido";
    var categoria = req.body.categoria ?? "desconhecido";
    var shiny = Number(req.body.shiny ?? 0);
    var mega = Number(req.body.mega ?? 0);

    cartasModel.salvar(fkUsuario, cartaId, cartaNome, cartaImagem, tipo, categoria, shiny, mega)

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function totalCartas(req, res) {
    cartasModel.contarTotalCartas()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function tiposCartas(req, res) {
    cartasModel.contarPorTipo()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function categoriasCartas(req, res) {
    cartasModel.contarPorCategoria()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    cartasModel.listar(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function ultimaCarta(req, res) {
    var idUsuario = req.params.idUsuario;

    cartasModel.ultimaCarta(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function cartasRepetidas(req, res) {
    var idUsuario = req.params.idUsuario;

    cartasModel.cartasRepetidas(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

module.exports = {
    salvar, totalCartas, tiposCartas, categoriasCartas, listar, ultimaCarta, cartasRepetidas
};


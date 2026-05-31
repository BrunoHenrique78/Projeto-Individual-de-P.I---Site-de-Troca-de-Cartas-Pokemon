let cartasModel = require("../models/cartasModel");

function salvar(req, res) {

    let fkUsuario = req.body.fkUsuario;
    let cartaId = req.body.cartaId;
    let cartaNome = req.body.cartaNome;
    let cartaImagem = req.body.cartaImagem;
    let tipo = req.body.tipo ?? "desconhecido";
    let categoria = req.body.categoria ?? "desconhecido";
    let raridade = req.body.raridade;


    cartasModel.salvar(fkUsuario, cartaId, cartaNome, cartaImagem, tipo, categoria, raridade)

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function totalCartas(req, res) {

    let idUsuario = req.params.idUsuario;

    cartasModel.contarTotalCartas(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function tiposCartas(req, res) {

    let idUsuario = req.params.idUsuario;

    cartasModel.contarPorTipo(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));

}

function categoriasCartas(req, res) {
    let idUsuario = req.params.idUsuario;

    cartasModel.contarPorCategoria(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function listar(req, res) {
    let idUsuario = req.params.idUsuario;

    cartasModel.listar(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function ultimaCarta(req, res) {
    let idUsuario = req.params.idUsuario;

    cartasModel.ultimaCarta(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function cartasRepetidas(req, res) {
    let idUsuario = req.params.idUsuario;

    cartasModel.cartasRepetidas(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

function raridadeCartas(req, res) {

    let idUsuario = req.params.idUsuario;

    cartasModel.raridadeCartas(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));

}

function atualizarDescricao(req, res) {

    let idCarta = req.params.idCarta;
    let descricao = req.params.descricao;

    cartasModel.atualizarDescricao(idCarta, descricao)
        .then(resposta => res.json(resposta))
        .catch(erro => res.status(500).json(erro));
}

function publicar(req, res) {
    let idCarta = req.params.idCarta;
    let idUsuario = req.params.idUsuario;
    let descricao = req.body.descricao;

    cartasModel.publicarCarta(idCarta, idUsuario, descricao)
        .then(resposta => res.json(resposta))
        .catch(erro => res.status(500).json(erro));
}

function listarGerais(req, res) {
    cartasModel.listarGerais()
        .then(resposta => res.json(resposta))
        .catch(erro => res.status(500).json(erro));
}

function listarMensagens(req, res) {

    let idCarta = req.params.idCarta;

    cartasModel.listarMensagens(idCarta)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            res.status(500).json(erro);
        });

}

function enviarMensagem(req, res) {

    let idCarta = req.params.idCarta;
    let idUsuario = req.body.idUsuario;
    let mensagem = req.body.mensagem;

    cartasModel.enviarMensagem(idCarta, idUsuario, mensagem)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            res.status(500).json(erro);
        });

}

module.exports = {
    salvar, totalCartas, tiposCartas, categoriasCartas, listar, ultimaCarta, cartasRepetidas, raridadeCartas, atualizarDescricao, publicar, listarGerais, listarMensagens, enviarMensagem
};


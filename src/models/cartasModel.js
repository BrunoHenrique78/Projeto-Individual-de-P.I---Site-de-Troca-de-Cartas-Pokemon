let database = require("../database/config");

function salvar(fkUsuario, cartaId, cartaNome, cartaImagem, tipo, categoria, raridade) {

    let instrucaoSql = `INSERT INTO cartas_salvas(fk_usuario_id, carta_id, carta_nome, carta_imagem, carta_tipo, carta_categoria, carta_raridade)
                        VALUES(${fkUsuario}, '${cartaId}', '${cartaNome}', '${cartaImagem}', '${tipo}', '${categoria}', '${raridade}');
                       `;

    return database.executar(instrucaoSql);
}

function contarTotalCartas(idUsuario) {
    let sql = `
        SELECT COUNT(*) AS total
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario};
    `;

    return database.executar(sql);
}

function contarPorTipo(idUsuario) {
    let sql = `
        SELECT carta_tipo, COUNT(*) AS quantidade
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario}
        GROUP BY carta_tipo;
    `;

    return database.executar(sql);
}

function contarPorCategoria(idUsuario) {
    let sql = `
        SELECT carta_categoria, COUNT(*) AS quantidade
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario}
        GROUP BY carta_categoria;
    `;
    return database.executar(sql);
}

function listar(idUsuario) {
    return database.executar(`
        SELECT 
            c.id_carta,
            c.carta_nome,
            c.carta_imagem,
            c.carta_tipo,
            c.carta_categoria,
            c.carta_raridade,
            c.descricao,
            u.nome,
            u.pais,
            u.estado
        FROM cartas_salvas c
        JOIN usuario u ON c.fk_usuario_id = u.id_usuario
        WHERE c.fk_usuario_id = ${idUsuario};
    `);
}

function ultimaCarta(idUsuario) {
    return database.executar(`
        SELECT MAX(data_adicao) AS ultima
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario};
    `);
}

function cartasRepetidas(idUsuario) {
    return database.executar(`
        SELECT 
            SUM(qtd - 1) AS repetidas
        FROM (
            SELECT COUNT(*) AS qtd
            FROM cartas_salvas
            WHERE fk_usuario_id = ${idUsuario}
            GROUP BY carta_id
        ) AS sub;
    `);
}

function raridadeCartas(idUsuario) {

    return database.executar(`
        SELECT carta_raridade, COUNT(*) AS quantidade
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario}
        GROUP BY carta_raridade;
    `);

}

function atualizarDescricao(idCarta, descricao) {

    let sql = `
        UPDATE cartas_salvas
        SET descricao = '${descricao}'
        WHERE id_carta = ${idCarta};
    `;

    return database.executar(sql);
}

function listarMensagens(idCarta) {
    return database.executar(`
        SELECT m.mensagem, u.nome
        FROM forum_mensagens m
        JOIN usuario u ON m.fk_usuario = u.id_usuario
        WHERE m.fk_carta = ${idCarta};
    `);
}

function enviarMensagem(idCarta, idUsuario, msg) {
    return database.executar(`
        INSERT INTO forum_mensagens (fk_carta, fk_usuario, mensagem)
        VALUES (${idCarta}, ${idUsuario}, '${msg}');
    `);
}

function publicarCarta(idCarta, idUsuario, descricao) {
    return database.executar(`
        INSERT INTO cartas_gerais (fk_carta, fk_usuario, descricao)
        VALUES (${idCarta}, ${idUsuario}, '${descricao}');
    `);
}

function listarGerais() {
    return database.executar(`
        SELECT 
            cg.id_publicacao,
            c.carta_nome,
            c.carta_imagem,
            c.carta_tipo,
            c.carta_categoria,
            c.carta_raridade,
            cg.descricao,
            u.nome,
            u.pais,
            u.estado
        FROM cartas_gerais cg
        JOIN cartas_salvas c ON cg.fk_carta = c.id_carta
        JOIN usuario u ON cg.fk_usuario = u.id_usuario;
    `);
}

module.exports = {
    salvar, contarTotalCartas, contarPorTipo, contarPorCategoria, listar, ultimaCarta, cartasRepetidas, raridadeCartas, atualizarDescricao, listarMensagens, enviarMensagem, publicarCarta, listarGerais
};
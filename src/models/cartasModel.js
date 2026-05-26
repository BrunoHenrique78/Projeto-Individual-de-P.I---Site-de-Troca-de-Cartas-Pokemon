var database = require("../database/config");

function salvar(fkUsuario, cartaId, cartaNome, cartaImagem, tipo, categoria, raridade) {

    var instrucaoSql = `INSERT INTO cartas_salvas(fk_usuario_id, carta_id, carta_nome, carta_imagem, carta_tipo, carta_categoria, carta_raridade)
                        VALUES(${fkUsuario}, '${cartaId}', '${cartaNome}', '${cartaImagem}', '${tipo}', '${categoria}', '${raridade}');
                       `;

    return database.executar(instrucaoSql);
}

function contarTotalCartas() {
    var sql = `
        SELECT COUNT(*) AS total
        FROM cartas_salvas;
    `;
    return database.executar(sql);
}

function contarPorTipo() {
    var sql = `
        SELECT carta_tipo, COUNT(*) AS quantidade
        FROM cartas_salvas
        GROUP BY carta_tipo;
    `;
    return database.executar(sql);
}

function contarPorCategoria() {
    var sql = `
        SELECT carta_categoria, COUNT(*) AS quantidade
        FROM cartas_salvas
        GROUP BY carta_categoria;
    `;
    return database.executar(sql);
}

function listar(idUsuario) {
    return database.executar(`
        SELECT carta_imagem 
        FROM cartas_salvas
        WHERE fk_usuario_id = ${idUsuario}
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

function raridadeCartas() {

    return database.executar(`
        SELECT carta_raridade, COUNT(*) AS quantidade
        FROM cartas_salvas
        GROUP BY carta_raridade;
    `);

}

module.exports = {
    salvar, contarTotalCartas, contarPorTipo, contarPorCategoria, listar, ultimaCarta, cartasRepetidas, raridadeCartas
};
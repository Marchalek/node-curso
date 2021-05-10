const conexao = require('../infraestrutura/conexao')


class Atenddimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log(resultados)
            }
        })
    }
}
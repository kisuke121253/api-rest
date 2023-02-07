import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '7223480CBD',
    database: 'bdcopa'
})

conexao.connect()
/**
 * executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {sting=id | [selecao, id]} valores a serem passados para o sql 
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */
export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, resultado) => {
            if (error) return reject(mensagemReject)
            // fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })



}
export default conexao
const mysql = require ('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "170614@Ba",
    database: "nodejs_mysql",
})

module.exports = pool
const mysql = require('mysql')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'macbook',
    database: 'realestate_db',
    connectionLimit: 5
})

export default connection

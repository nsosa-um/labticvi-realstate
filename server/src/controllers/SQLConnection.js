"use strict";
exports.__esModule = true;
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'macbook',
    database: 'realestate_db',
    connectionLimit: 5
});
exports["default"] = connection;

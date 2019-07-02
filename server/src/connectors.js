"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('realestate_db', 'root', 'macbook', {
    host: 'localhost',
    dialect: 'mysql'
});

const SQL = require('sequelize');

module.exports.createStore = () => {

  const db = new SQL('realestate_db', 'root', 'macbook', {
    dialect: 'mysql',
    host: 'localhost',
  });

  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    email: SQL.STRING,
    token: SQL.STRING,
  });

  const trips = db.define('trip', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    launchId: SQL.INTEGER,
    userId: SQL.INTEGER,
  });

  return { users, trips };
};

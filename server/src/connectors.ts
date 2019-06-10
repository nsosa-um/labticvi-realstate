import { Sequelize } from 'sequelize';

const db = new Sequelize('realestate_db', 'root', 'macbook', {
    host: 'localhost',
    dialect:'mysql'
});



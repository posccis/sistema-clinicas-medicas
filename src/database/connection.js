const Sequelize = require('sequelize');



const database = process.env.DB_DB;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const dialect = process.env.DIALECT;
const host = process.env.DB_HOST;





const connection = new Sequelize(database, username, password, {
    host:host,
    dialect: dialect
});

module.exports = connection;
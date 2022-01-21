// import the sequelize constructor
const Sequelize = require('sequelize');
// import sensitive login vars
require('dotenv').config();

// create connection to datatbase with mysql info
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
// Importa as configuração do projeto de configuração
require("dotenv").config();

//Importa o módulo do Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.HOST_CONNECTION, {dialect: 'mysql'});

module.exports = sequelize;
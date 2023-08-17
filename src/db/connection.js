const { Sequelize } = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.MY_URI);

console.log("DB connection is working");

module.exports = connection;

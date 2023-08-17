const { Sequelize } = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.MY_URI,{pool: {
    max: 5,
    min: 0,
    idle: 10000
  },});

console.log("DB connection is working");

module.exports = connection;

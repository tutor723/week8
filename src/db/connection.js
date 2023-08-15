const { Sequelize } = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.MY_URI);
//const connection = new Sequelize(" mysql://uhviwiakjrmqxkse:jsx8Mik3zpQRaCqOrUzs@bwgi5iymrmyyzo9ivpgv-mysql.services.clever-cloud.com:3306/bwgi5iymrmyyzo9ivpgv");
//console.log(`Database name is ${process.env.MY_URI}`);
console.log("DB connection is working");

module.exports = connection;

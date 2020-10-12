// Dependencies
var Sequelize = require("sequelize");
require("dotenv").config();
//process.env.DB_PASSWORD


// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("burgers_db", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


//export the connection
module.exports = sequelize;

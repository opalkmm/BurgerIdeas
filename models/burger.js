var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

//create burger models that matches up with DB
var Burger = sequelize.define("burger",{
//id automatically generated
//burger_name
//devoured - initialize as false
burger_name: Sequelize.STRING,
devoured: {type: Sequelize.BOOLEAN, defaultValue: false}
},{
   // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  freezeTableName: true
})

// Syncs with our burgers_db
Burger.sync();


module.exports = Burger;

//define and export Burger models
//props - name, and boolean of devoured 
const { Sequelize, DataTypes } = require('sequelize');


module.exports = function(Sequelize, DataTypes){
  var Burger = Sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Burger
}

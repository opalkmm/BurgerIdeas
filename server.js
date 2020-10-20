var express = require("express");
//import models
var burger = require("./models");
var PORT = process.env.PORT || 8000;
var app = express();
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

// Serve static content from public derec
app.use(express.static("public"));

// Parse body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars) 
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

//db sync
burger.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port:  ", PORT);
  });
});

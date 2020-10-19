var express = require("express");
//import models
var db = require("./models");
var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content from public derec
app.use(express.static("public"));

// Parse body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

//db sync
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port:  ", PORT);
  });
});

//dependencies
var express = require("express");
var router = express.Router();
var db = require("../models/");


//if '/' redirect to /burgers
router.get("/", function(req, res) {
  res.redirect("/burgers");
});
//get all burger in DB
router.get("/burgers", function(req, res) {
  db.Burger.findAll().then(function(result){
    let burgerResult = {burger: result}
    return res.render("index", burgerResult);
  })
});

// post route , add burger idea to DB
router.post("/burgers/create", function(req, res) {
 
  db.Burger.create({
    //burger_name - add input into column name in burgerdb
    burger_name: req.body.burger_name
  }).then(function(result){
    //result callback
    // console.log(result);
    //reload the page
    res.redirect("/");
  })
});

// PUT route to update the result of delete button (by id)
router.put("/burgers/update/:id", function(req, res) {
  //change devoured value to true 
  //condition query
  db.Burger.update({
    //not sure if 0/1 or T/F
    devoured: true 
  },{
    where:{
      id: req.params.id
    }
  }).then(function(result){
    res.json("/")
  })
});

module.exports = router;

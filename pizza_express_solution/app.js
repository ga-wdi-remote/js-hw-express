// =====================
// REQUIREMENTS
// =====================

var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var port = process.env.PORT || 3000; // telling the server where to listen for requests
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');
// =====================
// ROUTES
// =====================

// The routes below are solutions to res.send

// app.get('/', function(req, res, next) { // when a request comes in at localhost:3000/ it will respond
//   res.send("Welcome to Pizza Express!");
// });
//
// app.get('/topping/:item', function(req, res, next){
//   res.send(req.params.item + "! Good choice.");
// });
//
// app.get("/order/:amount/:size", function(req, res, next){
//   res.send("Your order for " + req.params.amount + " " + req.params.size + " pizzas will be ready in 1 minute!");
// });

//These routes use res.render + handlebar views

app.get('/', function(req, res, next) {
  res.render("layout", {
    data: "Welcome to Pizza Express!"
  });
});

app.get('/topping/:item', function(req, res, next){
  res.render("topping.hbs",{
    topping: req.params.item
  });
});

app.get("/order/:amount/:size", function(req, res, next){
  res.render("order.hbs", {
    amount: req.params.amount,
    size: req.params.size
  });
});

app.get("/:catch", function(req, res, next){
  res.send("404 Page Not Found :(")
});



// =====================
// LISTENERS
// =====================

app.listen(port, function(){
  console.log("==========================");
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================");
});// actualizing the above line

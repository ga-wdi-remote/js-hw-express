// =====================
// REQUIREMENTS
// =====================

var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var port = process.env.PORT || 3000; // telling the server where to listen for requests
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

// =====================
// ROUTES
// =====================

app.get('/', function(req, res, next) {
  res.render("index.hbs", {
    message: "Welcome to Pizza Express!"
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
  res.send("404 Page Not Found :(");
});



// =====================
// LISTENERS
// =====================

app.listen(port, function(){
  console.log("==========================");
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================");
});// actualizing the above line

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3307;
var cors = require('cors');
app.use(cors());
app.options('*',cors());


//Cors

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



 
// connect to database
//mc.connect();
// exports.pool=pool;
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Listening Port

var loginRoutes = require('./app/route/loginRoutes.js'); //importing route
loginRoutes(app); //register the route

module.exports=app;
app.listen(port);
console.log('API server started on: ' + port);
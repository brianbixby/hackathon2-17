var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var path = require('path');
var moment = require('moment');
var app = express();
// var db = require("./models");
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'static')));
      app.use(require('morgan')('dev'));

app.use(function(req, res, next) {
  res.locals.moment = moment;
  next();
});
//routes
app.get('/', function(req, res) {
  res.render('site/home.ejs');
});
// gets all articles  db. is based on folder models name
//get single article by ID
//get new article form
// create a new article
//listen
app.listen(3000);

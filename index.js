var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var path = require('path');
var moment = require('moment');
var app = express();
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');
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
app.post('/api/results', function(req, res) {
  var baseUrl = '';
})
http://api.yelp.com/v2/search?location=San+Francisco&oauth_consumer_key=123&oauth_consumer_secret=456&oauth_token=789&oauth_token_secret=012

app.post('/api/results', function(req, res) {
  var baseUrl = 'http://api.yelp.com/v2/search';
  var location = 'Seattle';
  var consumerKey = 'KTDFSCvdnsaSQJSZjVHq2g';
  var consumerSecret = 'f3qYQnTSZ3RnmirwNmnNQo3M2HY';
  var authToken = 'pXYNMXdTBPTTA1aKvUSpCJa_6Zt1HmDq';
  var authTokenSecret = 'lxc0DX92DKcSIRsAb7y36i958Cs';
  var url = baseUrl + '?location=' + location + '&oauth_consumer_key=' + consumerKey + '&oauth_consumer_secret=' + consumerSecret + '&oauth_token=' + authToken + '&oauth_token_secret=' + authTokenSecret;
  request(url, function(error, response, main) {
    if (!error && response.statusCode == 200) {
      api.parseJson(parsedMain);
      res.send({
        parsedMain: parsedMain
      });
    }
  });
});

//listen
var server = app.listen(process.env.PORT || 3000);
module.exports = server;

var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var path = require('path');
var moment = require('moment');
var app = express();
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: 'KTDFSCvdnsaSQJSZjVHq2g',
  consumer_secret: 'f3qYQnTSZ3RnmirwNmnNQo3M2HY',
  token: 'pXYNMXdTBPTTA1aKvUSpCJa_6Zt1HmDq',
  token_secret: 'lxc0DX92DKcSIRsAb7y36i958Cs',
});

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
  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
    console.log(data);
    res.render('site/home.ejs', {
      data: data
    });
    
  })
  .catch(function (err) {
    console.error(err);
  });
});






// app.post('/api/results', function(req, res) {
//   request(yelp, function(error, response, main) {
//     var parsedMain = JSON.parse(main);
//     if (!error && response.statusCode == 200) {
//       api.parseJson(parsedMain);
//       res.send({
//         parsedMain: parsedMain
//       });
//     }
//   });
// });




// // See http://www.yelp.com/developers/documentation/v2/business
// yelp.business('yelp-san-francisco')
//   .then(console.log)
//   .catch(console.error);
//
// yelp.phoneSearch({ phone: '+15555555555' })
//   .then(console.log)
//   .catch(console.error);
//
// // A callback based API is also available:
// yelp.business('yelp-san-francisco', function(err, data) {
//   if (err) return console.log(error);
//   console.log(data);
// });

//listen
var server = app.listen(process.env.PORT || 3000);
module.exports = server;

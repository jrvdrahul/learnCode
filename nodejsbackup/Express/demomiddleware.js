var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next) {
  console.log('Start');
  next();
});

//Route handler
app.get('/', function(req, res, next) {
  res.send('Middle');
  next();
});

app.use('/', function(req, res, next) {
  console.log('End');
  next();
});

app.listen(8081);

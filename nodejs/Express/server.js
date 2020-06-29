var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', function(req, res) {
  res.send('Hello World test');
});

app.post('/testpost', function(req, res, next) {
  console.log('req!!!!', req.body);
  console.log('!!!!!', req.body.name);
  res.send('got value succesfully');
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

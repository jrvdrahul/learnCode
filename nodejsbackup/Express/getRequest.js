var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
});

var Person = mongoose.model('customers', personSchema);

app.get('/people', function(req, res) {
  Person.find(function(err, response) {
    res.json(response);
  });
});

app.listen(8081);

var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

let Person = require('./person.model');

app.post('/people', function(req, res) {
  let person = new Person(req.body);
  person
    .save()
    .then(person => {
      //res.status(200).json({ person: 'person added successfully' });
      res.json(person);
    })
    .catch(err => {
      res.status(400).send('adding new person failed');
    });
});

app.listen(8081);

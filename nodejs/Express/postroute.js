var express = require('express');

let Person = require('./person.model');

var router = express.Router();

router.get('/', function(req, res) {
  Person.find()
    .then(person => {
      //res.status(200).json({ person: 'person added successfully' });
      res.json(person);
    })
    .catch(err => {
      res.status(400).send('adding new person failed');
    });
});

router.post('/', function(req, res) {
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

module.exports = router;

var express = require('express');

let Student = require('./student.model');

var router = express.Router();

router.post('/', function(req, res) {
  let student = new Student(req.body);
  student
    .save()
    .then(student => {
      //res.status(200).json({ person: 'person added successfully' });
      res.json(student);
    })
    .catch(err => {
      res.status(400).send('adding new person failed');
    });
});

module.exports = router;

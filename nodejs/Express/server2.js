var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var person = require('./postroute.js');
var student = require('./studentroute.js');

//both index.js and things.js should be in same directory
app.use('/people', person);
app.use('/student', student);

app.listen(8081);

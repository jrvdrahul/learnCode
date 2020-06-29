const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Person = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
});

module.exports = mongoose.model('Person', Person);

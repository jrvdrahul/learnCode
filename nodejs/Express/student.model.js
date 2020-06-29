const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Student = mongoose.Schema({
  name: String,
  age: Number,
  class: String
});

module.exports = mongoose.model('Student', Student);

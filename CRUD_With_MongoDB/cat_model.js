var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
  email:String,
  password:String
});

module.exports = mongoose.model('Cat',catSchema);

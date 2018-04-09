const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
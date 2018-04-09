var mongoose = require('mongoose');
const { Schema } = require('mongoose');

mongoose.connect('mongodb://localhost/fullstack-review-2');

module.exports = mongoose;
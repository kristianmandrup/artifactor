const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./common');

// allows easy extension
const schemaObj = {
  name: String,
  description: String,
  date: Date,
  version: String,
  rating: Float,
  author: Author,
  type: [String],
  keywords: [String],
  categories: [String]
};

module.exports = {
  schemaObj: schemaObj
} 
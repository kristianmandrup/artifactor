'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _require = require('./common');

var Author = _require.Author;

// allows easy extension

var schemaObj = {
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
};
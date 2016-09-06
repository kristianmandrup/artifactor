'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _require = require('./common');

var Author = _require.Author;

var _require2 = require('./component');

var Version = _require2.Version;

// Schema guide: http://mongoosejs.com/docs/guide.html

// allows easy extension

var schemaObj = {
  name: { type: String, index: true, required: true },
  description: String,
  date: { type: Date, index: true, required: true },
  version: { type: String, index: true, required: true },
  rating: Float, // virtual?
  author: Author,
  type: { type: String, index: true, required: true },
  keywords: { type: [String], index: true },
  categories: { type: [String], index: true },
  versions: [Version]
};

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schema)
};
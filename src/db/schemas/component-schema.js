const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./common');
const { Version } = require('./component');

// Schema guide: http://mongoosejs.com/docs/guide.html

// allows easy extension
const schemaObj = {
  name: {type: String, index: true, required: true},
  description: String,
  date: {type: Date, index: true, required: true},
  version: {type: String, index: true, required: true},
  rating: Float, // virtual?
  author: Author,
  type: {type: String, index: true, required: true},
  keywords: {type: [String], index: true},
  categories: {type: [String], index: true},
  versions: [Version]
};

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schema)
}
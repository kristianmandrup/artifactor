const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./common');
const { Version } = require('./component');

// Schema guide: http://mongoosejs.com/docs/guide.html

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
  categories: [String],
  versions: [Version]
};

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./common');
const { Version } = require('./component');

// Schema guide: http://mongoosejs.com/docs/guide.html

module.exports = new Schema({
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
});
const { Schema } = require('mongoose');
const { Author } = require('./common');
const Version = require('./component/version');

// Schema guide: http://mongoosejs.com/docs/guide.html

// allows easy extension
const schemaObj = {
  name: {type: String, index: true, required: true},
  description: String,
  date: {type: Date, index: true, required: true},
  version: {type: String, index: true, required: true},
  rating: Number, // virtual?
  author: Author,
  type: {type: String, index: true, required: true},
  keywords: {type: [String], index: true},
  categories: {type: [String], index: true},
  versions: [Version.schema]
};

module.exports = {
  obj: schemaObj,
  schema: new Schema(schemaObj)
}
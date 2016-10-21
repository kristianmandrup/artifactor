const { Author } = require('./common');

// allows easy extension
const schemaObj = {
  name: String,
  description: String,
  date: Date,
  version: String,
  rating: Number,
  author: Author,
  type: [String],
  keywords: [String],
  categories: [String]
};

module.exports = {
  obj: schemaObj
} 
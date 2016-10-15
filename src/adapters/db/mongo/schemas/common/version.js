const { Schema } = require('mongoose');
const Author = require('./author');
const InstallConfig = require('./install-config');

const defaults = {
  status: {type: String, default: 'stable'},
  rating: {type: Number, default: 3},
  date: {type: Date, default: Date.now, required: true},
  installations: {type: Number, default: 0, required: true},
}

const UiFramework = new Schema({
  name: String, 
  status: defaults.status
});

const Rating = new Schema({
  rating: {type: Number, default: 3}, 
  comment: String,
  username: String
});


const schemaObj = {
  number: {type: String, required: true }, // version number such as 1.3
  date: defaults.date,
  author: Author,
  notice: String,
  status: defaults.status,
  installations: defaults.installations,
  rating: defaults.rating,
  ratings: [Rating],
  ui: [UiFramework],
  install: InstallConfig
}

const schema = new Schema(schemaObj);

module.exports = {
  obj: schemaObj
}
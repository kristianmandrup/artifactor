const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaults = {
  status: {type: String, default: 'stable'},
  rating: {type: Number, default: 3},
  date: {type: Date, default: Date.now}
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

module.exports = new Schema({
  number: String, // version number such as 1.3
  location: String,
  date: defaults.date,
  author: Author,
  notice: String,
  status: defaults.status,
  installations: Number,
  rating: defaults.rating,
  ratings: [Rating],
  ui: [UiFramework],
  install: InstallConfig
});

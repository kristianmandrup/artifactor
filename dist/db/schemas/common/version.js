'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defaults = {
  status: { type: String, default: 'stable' },
  rating: { type: Number, default: 3 },
  date: { type: Date, default: Date.now, required: true },
  installations: { type: Number, default: 0, required: true }
};

var UiFramework = new Schema({
  name: String,
  status: defaults.status
});

var Rating = new Schema({
  rating: { type: Number, default: 3 },
  comment: String,
  username: String
});

var schemaObj = {
  number: { type: String, required: true }, // version number such as 1.3
  date: defaults.date,
  author: Author,
  notice: String,
  status: defaults.status,
  installations: defaults.installations,
  rating: defaults.rating,
  ratings: [Rating],
  ui: [UiFramework],
  install: InstallConfig
};

var schema = new Schema(schemaObj);

module.exports = {
  schemaObj: schemaObj
};
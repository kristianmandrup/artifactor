'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var versionObj = require('../common/version').schemaObj;

var schemaObj = Object.assign(versionObj, {
  location: String
});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
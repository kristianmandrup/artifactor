const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const versionObj = require('../common/version').schemaObj;

const schemaObj = Object.assign(versionObj, {
  location: String
});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
} 
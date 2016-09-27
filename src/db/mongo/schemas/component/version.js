const { Schema } = require('mongoose');
const versionObj = require('../common/version').obj;

const schemaObj = Object.assign(versionObj, {
  location: String
});

module.exports = {
  obj: schemaObj,
  schema: new Schema(schemaObj)
} 
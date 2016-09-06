'use strict';

var artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(artefact.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
'use strict';

// The Addon is similar to component, app etc. except it is NOT linked to a repo,
// so a version has no repo location

var artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
var schemaObj = Object.assign(artefact.schemaObj, {});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
};
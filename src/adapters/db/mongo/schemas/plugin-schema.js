const {Schema } = require('mongoose');
const artefact = require('./artefact-schema');

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
const schemaObj = Object.assign(artefact.obj, {

});

module.exports = {
  obj: schemaObj,
  schema: new Schema(schemaObj)
}
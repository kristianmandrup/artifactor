const mongoose = require('mongoose');
const schemas = require('./schemas');
const entities = require('./entities');
const _ = require('lodash');

// decorator adds useful instance and static methods to model
// esp. to better manage versions and ratings! 
const decorate = require('./decorator');

// iterate over all supported artefact entities
// create a models map using schemas map
module.exports = entities.names.reduce( (models, name) => {
  let clazzName = _.capitalize(name);
  let schema = schemas[name];
  schema = decorate(schema, clazzName)

  let mdl = mongoose.model(clazzName, schema);

  console.log('export model:', clazzName, mdl)
  models[clazzName] = mdl;  
  return models;
}, {})

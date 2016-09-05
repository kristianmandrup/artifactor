const mongoose = require('mongoose');
const schemas = require('./schemas');
const entities = require('../artefacts/entities');
const _ = require('lodash');

// iterate over all supported artefact entities
// create a models map using schemas map
module.exports = entities.names.reduce( (models, name) => {
  let clazzName = _.capitalize(name);
  models[clazzName] = mongoose.model(clazzName, schemas[name]);
  return models;
}, {})

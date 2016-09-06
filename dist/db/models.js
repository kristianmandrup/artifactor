'use strict';

var mongoose = require('mongoose');
var schemas = require('./schemas');
var entities = require('../artefacts/entities');
var _ = require('lodash');

// decorator adds useful instance and static methods to model
// esp. to better manage versions and ratings! 
var decorator = require('./decorator');

// iterate over all supported artefact entities
// create a models map using schemas map
module.exports = entities.names.reduce(function (models, name) {
  var clazzName = _.capitalize(name);
  var mdl = mongoose.model(clazzName, schemas[name]);

  models[clazzName] = decorate(mdl);
  return models;
}, {});
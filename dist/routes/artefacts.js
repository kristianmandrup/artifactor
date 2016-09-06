'use strict';

var factory = require('../factories/router');
var entities = require('../artefacts/entities');

module.exports = entities.list.map(function (entity) {
  return factory.createRouter(entity);
});
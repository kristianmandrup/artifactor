const factory = require('../factories').router;
const entities = require('../artefacts').entities;

const db = require('../db');
const adapters = require('../adapters');

module.exports = entities.list.map(entity => factory.create(entity));
  


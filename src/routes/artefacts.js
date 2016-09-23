const factory = require('./entity/router-factory');
const entities = require('../artefacts').entities;

const db = require('../db');
const adapters = require('../adapters');

// module.exports = entities.list.map(entity => factory.create(entity));

module.exports = factory.create('components');
  


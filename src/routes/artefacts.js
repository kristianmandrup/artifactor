const factory = require('./entity/router-factory');
const entities = require('../artefacts').entities;

module.exports = entities.list.map(entity => factory.create(entity));

  


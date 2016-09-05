const factory = require('../factories/router');
const entities = require('../artefacts/entities');

module.exports = entities.list.map(entity => factory.createRouter(entity));
  


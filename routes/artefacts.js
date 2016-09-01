const factory = require('../factories/router');
const entities = require('../artefacts/entities');

entities.list.map(entity => factory.createRouter(entity));
  


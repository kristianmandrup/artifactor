const routerFactory = require('./entity/router-factory');
const entities = require('../artefacts').entities;

// apps, components, plugins, ...
module.exports = entities.list.map(entity => routerFactory.create(entity));

  


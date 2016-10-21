const routerFactory = require('./router-factory');
const entities = require('../../../artefact').entities;

// apps, components, plugins, ...
module.exports = function({adapter = 'file'}) {
  console.log('creating routers using adapter:', adapter)
  return entities.plural.map(entity => routerFactory.create(entity, adapter));
}
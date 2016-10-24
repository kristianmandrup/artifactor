const createRouter = require('./factory');
const entities = require('../').artefact.entities.plural;

// apps, components, plugins, ...
module.exports = function({adapter = 'file'}) {
  console.log('creating routers using adapter:', adapter)
  return entities.map(entity => createRouter(entity, adapter));
}

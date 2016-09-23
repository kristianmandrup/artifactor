const EntityRoute = require('./entity-route');

module.exports = class ListRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('list', entity, ctx, next);
  }

  error() {
    console.error('List route error');
  }
}
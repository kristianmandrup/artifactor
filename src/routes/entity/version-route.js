const EntityRoute = require('./entity-route');

module.exports = class VersionRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('version', entity, ctx, next);
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts',
      version: this.ctx.query.version || '1.0'
    }
  }

  error() {
    console.error('Version route error');
  }
}
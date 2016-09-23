const EntityRoute = require('./entity-route');

module.exports = class DeleteRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('delete', entity, ctx, next);
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts'
    } 
  }

  error() {
    console.error('Delete route error');
  }
}
const EntityRoute = require('./entity-route');

module.exports = class CreateRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('create', entity, ctx, next);
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts',
      data: this.ctx.request.body
    } 
  }

  error() {
    console.error('Create route error');
  }
}
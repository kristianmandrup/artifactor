const EntityRoute = require('./entity-route');

module.exports = class UpdateRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('update', entity, ctx, next);
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts',
      data: this.ctx.request.body
    } 
  }

  error() {
    console.error('Update route error');
  }
}
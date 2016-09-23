const EntityRoute = require('./entity-route');

module.exports = class RateRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('rate', entity, ctx, next);
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts',
      data: this.ctx.request.body
    } 
  }

  error() {
    console.error('Rate route error');
  }
}
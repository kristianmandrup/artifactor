const BaseRoute = require('./base');

module.exports = class CreateRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'create');
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
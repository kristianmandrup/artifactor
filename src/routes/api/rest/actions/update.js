const BaseRoute = require('./base');

module.exports = class UpdateRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'update');
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
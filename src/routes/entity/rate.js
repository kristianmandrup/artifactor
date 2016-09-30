const BaseRoute = require('./base');

module.exports = class RateRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'rate');
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
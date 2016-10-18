const BaseRoute = require('./base');

module.exports = class DeleteRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'delete');
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
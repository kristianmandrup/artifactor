const BaseRoute = require('./base');

module.exports = class ItemRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'item');
  }

  extract() {   
    this.params = {
      id: this.ctx.params.id || 'contacts'
    } 
  }

  error() {
    console.error('Item route error');
  }
}
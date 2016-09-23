const EntityRoute = require('./entity-route');

module.exports = class ItemRoute extends EntityRoute {
  constructor(entity, ctx, next) {
    super('item', entity, ctx, next);
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
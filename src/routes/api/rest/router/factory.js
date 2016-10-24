const Router = require('koa-router');
const RouteFactory = require('./route').factory;

class RouterFactory {
  constructor(entity, adapter = 'file') {
    console.log('create router factory', entity, adapterType);

    for (let action of this.routes()) {
      this[action] = async (ctx, next) => {
        return await new RouteFactory(ctx, next, {action, adapterType, entity});
      }
    }

    this.createRouter();
  }

  get routes() {
    return ['list', 'get', 'upsert', 'delete', 'rate'];
  }

  createRouter() {
    this.router = new Router({
      // /apps
      // /components
      prefix: `/${this.entity}`
    });

    // each entity router has exactly the same routes
    router
      // /components/
      .get('list', '/', this.list.bind(this))
      // /components/:id
      .get('get', '/:id', this.item.bind(this))            
      .post('create', '/:id', this.create.bind(this))
      .del('delete', '/:id', this.delete.bind(this))
      .put('update','/:id', this.update.bind(this))      
      .post('rate', '/:id/rate', this.rate.bind(this))            
  }
} 

module.exports = function(entity, adapter) {
  return new RouterFactory(entity, adapter).router;
}

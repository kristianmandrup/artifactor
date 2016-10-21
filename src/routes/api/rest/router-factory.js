const Router = require('koa-router');

class RouterFactory {

  constructor(entity, adapter = 'file') {
    console.log('create router factory', entity, adapter);
    this.entity = entity;
    this.adapter = adapter; // type of adapter ('file' or 'db')
  }

  get routes() {
    return ['list', 'get', 'create', 'update', 'delete', 'rate'];
  }

  loadAction(name) {
    return require(`./actions/${name}`);
  }

  get registry() {
    return this.routes.reduce( (res, name) => {
      res[name] = this.loadAction(name); 
      return res;
    }, {});
  }

  routeClass(name) {
    return this.registry[name];
  }

  routeInstance(name, ctx, next) {
    let clazz = this.routeClass(name);
    let options = {
      name: name, 
      entity: this.entity, 
      adapter: this.adapter
    };
    return new clazz(ctx, next, options);
  }

  async request(name, ctx, next) {
    return await this.routeInstance(name, ctx, next).route();
  }

  async list(ctx, next) {
    console.log('list', ctx);
    return await this.request('list', ctx, next);
  }

  async item(ctx, next) {
    console.log('item', ctx);
    return await this.request('item', ctx, next);
  }

  async version(ctx, next) {
    console.log('version', ctx);
    return await this.request('version', ctx, next);
  }

  async create(ctx, next) {
    console.log('create', ctx);
    return await this.request('create', ctx, next);
  }

  async update(ctx, next) {
    console.log('update', ctx);
    return await this.request('update', ctx, next);
  }

  async rate(ctx, next) {
    console.log('rate', ctx.body);
    return await this.request('rate', ctx, next);
  }

  async delete(ctx, next) {
    console.log('delete', ctx);
    return await this.request('delete', ctx, next);
  }

  createRouter() {
    const router = new Router({
      // /apps
      // /components
      prefix: `/${this.entity}`
    });

    // each entity router has exactly the same routes
    router
      // /components/
      .get('list', '/', this.list.bind(this))
      // /components/:id
      .get('item', '/:id', this.item.bind(this))
      .get('version', '/:id/version', this.version.bind(this))            
      .post('create', '/:id', this.create.bind(this))
      .del('delete', '/:id', this.delete.bind(this))
      .put('update','/:id', this.update.bind(this))      
      .post('rate', '/:id/rate', this.rate.bind(this))            

    return router;
  }
} 

module.exports = {
  Factory: RouterFactory, 
  create: function(entity, adapter) {
    return new RouterFactory(entity, adapter).createRouter();
  }
 
}

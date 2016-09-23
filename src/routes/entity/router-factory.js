const Router = require('koa-router');
const ListRoute = require('./list-route');

class RouterFactory {
  constructor(entity) {
    this.entity = entity;
  }

  get registry() {
    return {
      list: ListRoute
      // ... one entry for each route class
    }
  }

  routeClass(name) {
    return this.registry[name];
  }

  routeInstance(name, ctx, next) {
    let clazz = this.routeClass(name);
    return new clazz(this.entity, ctx, next);
  }

  async request(name, ctx, next) {
    return await this.routeInstance(name, ctx, next).route();
  }
/*
  get create() {
    return async function (ctx, next) {
      ctx.body = `POST/create ${entity} is not yet supported!`;  
    }
  }

  get rate() {
    return async function (ctx, next) {
      ctx.body = `POST/create ${entity} is not yet supported!`;  
    }
  }

  get remove() {
    return async function (ctx, next) {
      ctx.body = `DELETE ${entity} is not yet supported!`;  
    }
  }

  get update() {
    return async function (ctx, next) {
      ctx.body = `PUT/update ${entity} is not yet supported!`;  
    }
  }
*/

  async list(ctx, next) {
    console.log('list', ctx);
    return await this.request('list', ctx, next);
  }

  get item() {
    return async function (ctx, next) {
      ctx.body = `GET/list ${entity} is not yet supported!`;  
    }
  }

  get version() {
    return async (ctx, next) => {
      ctx.body = `GET/list ${entity} is not yet supported!`;  
    }
  }

  createRouter() {
    const router = new Router({
      prefix: `/${this.entity}`
    });

    router
      .get('list', '/', this.list.bind(this));
/*
      .get('item', '/:id', this.item)
      .get('version', '/:id/version', this.version)            
      .post('create', '/:id', this.create)
      .post('rate', '/:id/rate', this.rate)
      .put('update','/:id', this.update)
      .del('delete', '/:id', this.remove);
*/
    return router;
  }
} 

module.exports = {
  Factory: RouterFactory, 
  create: function(entity) {
    return new RouterFactory(entity).createRouter();
  }
 
}

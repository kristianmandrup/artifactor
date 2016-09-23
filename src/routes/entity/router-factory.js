const Router = require('koa-router');
const ListRoute = require('./list-route');
const ItemRoute = require('./item-route');
const VersionRoute = require('./version-route');
const CreateRoute = require('./create-route');
const DeleteRoute = require('./delete-route');
const UpdateRoute = require('./update-route');

class RouterFactory {
  constructor(entity) {
    this.entity = entity;
  }

  get registry() {
    return {
      list: ListRoute,
      item: ItemRoute,
      version: VersionRoute,
      create: CreateRoute,
      delete: DeleteRoute,
      update: UpdateRoute
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

*/

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

  async delete(ctx, next) {
    console.log('delete', ctx);
    return await this.request('delete', ctx, next);
  }

  createRouter() {
    const router = new Router({
      prefix: `/${this.entity}`
    });

    router
      .get('list', '/', this.list.bind(this))
      .get('item', '/:id', this.item.bind(this))
      .get('version', '/:id/version', this.version.bind(this))            
      .post('create', '/:id', this.create.bind(this))
      .del('delete', '/:id', this.delete.bind(this))
      .put('update','/:id', this.update.bind(this))
/*      
      .post('rate', '/:id/rate', this.rate)            
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

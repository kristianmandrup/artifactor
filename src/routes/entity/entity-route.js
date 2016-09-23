const adapters = require('./adapters')

module.exports = class EntityRoute {
  // type is the type of artefact such as: components
  constructor(name, entity, ctx, next) {
    this.name = name;
    this.entity = entity;
    this.ctx = ctx;
  }

  // Do we accept the request?
  accept() {
    switch (this.ctx.accepts('json', 'html')) {
      case 'json':
        return true;
      case 'html': 
        return true;
      default: this.ctx.throw(406, 'json or html only');
    }    
  }

  get adapter() {
    return adapters.io.adapt(this.entity, this.id);
  }

  async route() { 
    // See routes/entity/list.js 
    if (!this.accept()) this.error();
    this.extract();
    await this.respond();
  }

  // Extract from params and query string
  extract() {   
    console.log('nothing to be extracted from request'); 
  }

  async jsonBody() {
    console.log('get json body', this.name);
    return await this.adapter[this.name]();
  }
    
  // Use adapter
  async respond() {
    console.log('responding');
    this.ctx.type = 'json';

    const body = await this.jsonBody();
    console.log('body', body);  
    this.ctx.body = body;
  }
}
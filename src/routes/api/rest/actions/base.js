const adapters = require('./adapters')
const Validator = require('./validator'); 

module.exports = class BaseRoute {
  // type is the type of artefact such as: components
  constructor(ctx, next, {entity, adapter}, name) {
    this.validator = new Validator(ctx)
    this.name = name;
    this.entity = entity;
    this.ctx = ctx;
    this.adapterType = adapter || 'file';
  }

  accept() {
    return this.acceptType() && this.valid();
  }

  // Do we accept the request?
  acceptType() {
    switch (this.ctx.accepts('json', 'html')) {
      case 'json':
        return true;
      case 'html': 
        return true;
      default: this.ctx.throw(406, 'json or html only');
    }    
  }

  valid() {
    return this.validator.validate();
  }

  // we use file adapter here
  // f.ex for components entity
  get adapter() {
    return adapters[this.adapterType].adapt(this.entity, this.params);
  }

  // executes the route and returns the body
  async route() {
    try {
      // See routes/entity/list.js 
      if (!this.accept()) this.error();
      this.extract();
      await this.respond();
    } catch (err) {
      console.error('ERROR', err);
      this.ctx.body = {error: err};
      this.ctx.status = 400; // OK      
    }
  }

  // Extract from params and query string
  extract() {   
    this.params = {}; 
  }

  // name could be f.ex: list, item or version and so on...
  async jsonBody() {
    console.log('get json body', this.name, this.adapterType);
    return await this.adapter[this.name](this.params);
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
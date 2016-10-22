const models = require('./models');
const db = require('./db');
const BaseAdapter = require('../../base');
const { className } = require('../utils');

// We use Cradle with PromisedLand which provides a promisified MongoDB API
// Hopefully we can then pretty much reuse the same adapter methods!!  
class DbAdapter extends BaseAdapter {
  constructor(entity, {params}) {
    super(entity, {params})
    this.configure();
  }

  configure() {
    // Mongo specific
    this.clazzName = className(this.entity);
    this.model = models[this.clazzName];

    if (!this.model) {
      throw `No models defined for ${this.entity}`;
    } else {
      console.log('MODEL', this.entity, this.model);
    }    
  }

  async get() {
    console.log('DB: find item by ID', this.id);
    return await this.model.find({name: this.id}).exec();
  }

  async list() {
    return await this.model.find().exec();
  }

  // creates new and/or adds new version (upsert)
  async upsert() {
    console.log('upsert', this.clazzName, this.data)
    return await this.model.create(this.data).exec();
  }

  // http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  // http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove
  async delete() {
    return await this.model.findOneAndRemove({name: this.id}).exec();
  }

  async rate() {
    console.log('Rating', this.entity, this.id, 'not yet supported');
  }
}

// TODO: externalize pattern
module.exports = function(entity, {params}) {
  return new DbAdapter(entity, {params})
} 
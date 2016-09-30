import {db, models} from '../db/mongo'
const _ = require('lodash');
_.mixin(require("lodash-inflection"));

// console.log('imported models', models)

class Adapter {
  constructor(entity) {
    this.entity = entity;
    this.clazzName = _.capitalize(_.singularize(entity));
    this.model = models[this.clazzName];

    if (!this.model) {
      throw `No models defined for ${entity}`;
    } else {
      console.log('MODEL', entity, this.model);
    }
  }

  async item(id) {
    return this.model.find({name: id}).exec();
  }

  async list(id) {
    return this.model.find().exec();
  }

  // Look at db/decorator.js for useful instance methods...
  async version(id, versionId) {
    console.log('Retrieve version', versionId, 'not yet supported');
  }

  // creates new and/or adds new version (upsert)
  async create(id, data) {
    return this.model.create(data).exec();
  }

  // adds new version (upsert)
  async update(id, data) {
    console.log('Update', this.entity, id, 'not yet supported');
  }  

  // http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  // http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove
  async delete(id) {
    return this.model.findOneAndRemove({name: id}).exec();
  }

  async rate(id, data) {
    console.log('Rating', this.entity, id, 'not yet supported');
  }
}

module.exports = {
  Adapter: Adapter,
  adapt: function(entity) {
    return new Adapter(entity)
  }
} 
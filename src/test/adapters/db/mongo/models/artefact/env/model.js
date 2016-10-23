const { mongo } = require('../../../../../adapters/db')
const models = mongo.models;

// see http://mongoosejs.com/docs/models.html
const model = models.Artefact;

module.exports = class Model {
  // TODO: default predicate arg?
  constructor() {    
    // alias
    this.remove = this.delete;
  }

  async create(obj) {
    try {
      return model.create(obj);
    } catch (err) {
      console.error(err);
    }  
  }

  async delete(predicate) {
    try {
      return model.remove(predicate);
    } catch (err) {
      console.error(err);
    }  
  }

  async update(predicate, obj) {
    try {
      return model.findOneAndUpdate(predicate, obj);
    } catch (err) {
      console.error(err);
    }  
  }
  
  async get(predicate) {
    try {
      return model.find(predicate);
    } catch (err) {
      console.error(err);
    }  
  }

  async list() {
    try {
      return model.find();
    } catch (err) {
      console.error(err);
    }  
  }        
}

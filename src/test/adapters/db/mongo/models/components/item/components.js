const { mongo } = require('../../../../../adapters/db')
const models = mongo.models;

// see http://mongoosejs.com/docs/models.html

module.exports = {
  create: async (obj) => {
    try {
      return models.Component.create(obj);
    } catch (err) {
      console.error(err);
    }  
  },
  delete: async (predicate) => {
    try {
      return models.Component.remove(predicate);
    } catch (err) {
      console.error(err);
    }  
  },
  update: async (predicate, obj) => {
    try {
      return models.Component.findOneAndUpdate(predicate, obj);
    } catch (err) {
      console.error(err);
    }  
  },  
  find: async (predicate) => {
    try {
      return models.Component.find(predicate);
    } catch (err) {
      console.error(err);
    }  
  },
  findAll: async () => {
    try {
      return models.Component.find();
    } catch (err) {
      console.error(err);
    }  
  }        
}

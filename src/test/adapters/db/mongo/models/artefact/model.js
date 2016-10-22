const { mongo } = require('../../../../../adapters/db')
const models = mongo.models;

// see http://mongoosejs.com/docs/models.html
const model = models.Artefact;

module.exports = {
  create: async (obj) => {
    try {
      return model.create(obj);
    } catch (err) {
      console.error(err);
    }  
  },
  delete: async (predicate) => {
    try {
      return model.remove(predicate);
    } catch (err) {
      console.error(err);
    }  
  },
  update: async (predicate, obj) => {
    try {
      return model.findOneAndUpdate(predicate, obj);
    } catch (err) {
      console.error(err);
    }  
  },  
  find: async (predicate) => {
    try {
      return model.find(predicate);
    } catch (err) {
      console.error(err);
    }  
  },
  findAll: async () => {
    try {
      return model.find();
    } catch (err) {
      console.error(err);
    }  
  }        
}

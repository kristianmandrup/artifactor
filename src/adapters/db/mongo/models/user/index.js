const schemas = require('../schemas')
const { classify } = require('lodash')

const models = Object.keys(schemas).reduce((name, obj) => {
  obj[name] = mongoose.model(classify(name), schemas[name]);
  return obj
}, {});
  
module.exports = models;  
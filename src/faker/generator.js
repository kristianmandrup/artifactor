const jsf = require('json-schema-faker')
let { decorate, schema } = require('./schema');
let { merge } = require('lodash');

// twistedSchema allows override of one or more property fakers to suit specific scenario, 
// such as when simulating a special kind of search for the fake adapter etc. 
module.exports = function generatorFor(artefactType, twistedSchema = {}) {
  const decoratedSchema = decorate(schema)
  const fakerSchema = merge(decoratedSchema, twistedSchema);

  return function(count) {
    if (count && count > 1)
      return new Array(count).map(n => jsf(fakerSchema));  
    // by default return 1 fake instance
    return jsf(fakerSchema)
  }
}

const jsf = require('json-schema-faker')
let { decorate, schema } = require('./schema');

// twistedSchema allows override of one or more property fakers to suit specific scenario, 
// such as when simulating a special kind of search for the fake adapter etc. 
function generatorFor(artefactType, twistedSchema = {}) {
  let fakerSchema = _.merge(decorate(schema), twistedSchema);

  return function(count) {
    if (count && count > 1)
      return new Array(count).map(n => jsf(fakerSchema));  
    // by default return 1 fake instance
    return jsf(fakerSchema)
  }
}

export default {
  generatorFor,
}
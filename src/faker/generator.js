const jsf = require('json-schema-faker')
const schema = require('../artefact/schema');
const fakerDecorate = require('./decorate');
const { merge } = require('lodash');

const { display } = require('./utils') 

// twistedSchema allows override of one or more property fakers to suit specific scenario, 
// such as when simulating a special kind of search for the fake adapter etc. 
module.exports = function generatorFor(artefactType, twistedSchema = {}) {

  const decoratedSchema = fakerDecorate(schema)

  // display(decoratedSchema.properties.name, 'NAME');
  // display(decoratedSchema.definitions.category, 'DECORATED')

  const fakerSchema = merge({}, decoratedSchema, twistedSchema);

  return function(count) {
    if (count && count > 1)
      return new Array(count).map(n => jsf(fakerSchema));  
    // by default return 1 fake instance

    return jsf(fakerSchema)
  }
}


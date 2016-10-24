const jsf = require('json-schema-faker')
const schema = require('../artefact/schema');
const { decorate } = require('./schema');
const { merge } = require('lodash');

const { display } = require('./utils') 

// twistedSchema allows override of one or more property fakers to suit specific scenario, 
// such as when simulating a special kind of search for the fake adapter etc. 
module.exports = function generatorFor(artefactType, twistedSchema = {}) {

  console.log('decorate', decorate);

//  display(schema, 'SCHEMA');

  const decoratedSchema = decorate(schema)

//  display(decoratedSchema, 'DECORATED');

  const fakerSchema = merge({}, decoratedSchema, twistedSchema);

  // display(fakerSchema, 'FULL');

  return function(count) {
    if (count && count > 1)
      return new Array(count).map(n => jsf(fakerSchema));  
    // by default return 1 fake instance

    // add custom semantic version format!
    jsf.format('semver', function(gen, schema) {
      return gen.randexp('^\\d\\.\\d\\.\\d{1,2}$');
    });

    return jsf(fakerSchema)
  }
}


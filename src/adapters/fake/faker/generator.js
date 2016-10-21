const faker = require('faker');
const jsf = require('json-schema-faker')

function generatorFor(artefactType) {
  let schema = require('./schemas/artefact');

  return function() {
    return jsf(schema)
  }
}

export default {
  generatorFor,
}
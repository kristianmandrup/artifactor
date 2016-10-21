const faker = require('faker');
const jsf = require('json-schema-faker')

class DataFaker {
  constructor(entity, id) {
    this.entity = entity;
    this.id = id;
  }

  async getItem() {
    return {
      name: faker.name.findName()
      // ...
    };
  }
}

function generatorFor(artefactType) {
  let schema = require('./schemas/' + artefactType);

  return function() {
    return jsf(schema)
  }
}

export default {
  DataFaker,
  generatorFor,
  create: function (entity, id) {
    return new DataFaker(entity, id);
  }
}
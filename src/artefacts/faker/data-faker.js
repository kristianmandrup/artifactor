const faker = require('faker');

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
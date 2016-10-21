// Generates fake data, simulating a backend with tons of data

import faker from '../../faker';

class FakeAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {id}) {
    this.io = faker.create(entity, id);
  }

  async item() {
    return faker.generate();
  }

  async list() {
    let list = await this.io.getList();
    return list; // await this.io.getList();
  }

  async version({version}) {
    // console.log('get version', version);
    return await this.io.getVersion(version);
  }

  // creates new and/or adds new version (upsert)
  async create({data}) {
    console.log('create item', data);
    return await this.io.createItem(data);
  }

  // adds new version (upsert)
  async update({data}) {
    return this.io.updateItem(data);
  }  

  async delete() {
    return this.io.deleteItem();
  }

  async rate({version, data}) {
    return this.io.rateVersion(version, data);
  }
}

module.exports = {
  Adapter: FakeAdapter,
  // id is optional, used to indicate specific REST resource
  adapt: function(entity, id) {
    return new FakeAdapter(entity, id);
  }
} 
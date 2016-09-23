const fileIo = require('./file-io');

class JsonIo {
  constructor(entity, id) {
    this.id = id;
    this.entity = entity;
    this.io = fileIo.create(entity, id);
  }

  // async
  async createItem(data) {
    // console.log(`Create ${this.entity} for ${this.id} not yet supported...`);
    return {
      created: await this.io.create(data)
    };
  }

  // async 
  async deleteItem() {
    return {
      deleted: await this.io.delete()
    };
  }

  // async 
  async updateItem(data) {
    return {
      updated: await this.io.create(data)
    };
  }

  async getItem(id) {
    return JSON.parse(await this.io.item());
  }

  async getVersion(version) {
    return JSON.parse(await this.io.version());
  }

  async getList() {
    let content = await this.io.list();
    console.log('json content', content);
    return JSON.parse(content);
  }

  // async
  rateVersion(id, versionId, data) {
    console.log(`Rate ${this.entity} for ${id} not yet supported...`);
  }  
}

module.exports = {
  clazz: JsonIo,
  create: function(entity, name) {
    return new JsonIo(entity, name);  
  }
}
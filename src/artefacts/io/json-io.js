const fs = require('fs-promise');
const BaseIo = require('./base-io');
const fileIo = require('./file-io');

// TODO: read/write JSON directly and get rid of file-io

// Reads JSON from files in /responses
class JsonIo extends BaseIo {
  constructor(entity, id) {
    super(entity, id);
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
    let filePath = this.paths.itemPath;
    return await fs.readJson(filePath);    
  }

  async getVersion(version) {
    let filePath = this.paths.versionPath(version);
    console.log('version path', filePath);
    return await fs.readJson(filePath);    
  }

  async getList() {
    let content = await this.io.list();
    console.log('json content', content);
    return JSON.parse(content);
  }

  // async
  async rateVersion(versionId, data) {
    return {
      rated: await this.io.rate(versionId, data)
    };

  }  
}

module.exports = {
  clazz: JsonIo,
  create: function(entity, id) {
    return new JsonIo(entity, id);  
  }
}
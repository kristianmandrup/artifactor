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
    console.log('Create:', this.id, data);
    return {
      created: await this.io.create(data)
    };
  }

  // async 
  async deleteItem() {
    return {
      deleted: await this.io.delete(id)
    };
  }

  // async 
  // TODO: Only create if no file/instance yet, otherwise add as version to existing
  async updateItem(data) {
    return {
      updated: await this.update(data)
    };
  }

  async update(data) {
    let filePath = this.paths.itemPath;
    try {
      let exist = await fs.stat(filePath);
      return exist ? await this.io.addVersion(data) : false; 
    } catch (err) {
      return await this.io.create(data);
    }
  }
  
  async getItem() {
    let filePath = this.paths.itemPath;
    return await fs.readJson(filePath);    
  }

  async getVersion(version) {
    console.log('version', version)
    // Hack for now
    version = undefined;
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
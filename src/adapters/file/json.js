const fs = require('fs-promise');
const file = require('./file');
const BaseIo = require('./base');

// TODO: Don't use fileIo from here! Use straight from FileAdapter!! 

// Reads JSON from files in /responses folder
// See utils/paths
class JsonIo extends BaseIo {
  constructor(entity, id) {
    super(entity, id);
    this.io = file.create(entity, id); 
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
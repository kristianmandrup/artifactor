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
      created: await this.create(data)
    };
  }

  // uses: outputJson from fs-extra
  // Almost the same as writeJson, except that if the directory does not exist, it's created.
  async create(data) {
    let filePath = this.paths.itemPath;
    console.log('create path', filePath);
    try {
      await fs.outputJson(filePath, data);
      return true;
    } catch (err) {
      return false;
    }     
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
      return exist ? await this.addVersion(data) : false; 
    } catch (err) {
      return await this.create(data);
    }
  }

  async addVersion(data) {
    let version = data.version; 
    let filePath = this.paths.versionPath(version);
    try {
      return await fs.outputJson(filePath, data);
    } catch (err) {
      return false;
    }     
  }
    
  async getItem() {
    let filePath = this.paths.itemPath;
    return await fs.readJson(filePath);    
  }

  // TODO: use cache
  async findLatestVersion() {
    let versionFiles = await this.io.files();
    latestFile = versionFiles.reverse()[0]; // sort descending
    let content = await fs.readJson(latestFile);
    if (!content)
      return false;
    return content.version; 
  }

  async getLatestVersion() {
    let latestVersion = await findLatestVersion();
    return await this.getVersion(latestVersion)
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
      rated: await this.rate(versionId, data)
    };
  }  

  async rate(version, data) {
    let filePath = this.paths.versionPath(version);
    console.log('rate path', filePath);
    try {
      let item = await fs.readJson(filePath);
      // add rating to ratings of version item
      console.log('item before rating', item)
      item.ratings.push(data.rating);
      console.log('item after rating', item)
      await fs.outputJson(filePath, item);
      return item;
    } catch (err) {
      return false;
    }     
  }  
}

module.exports = {
  clazz: JsonIo,
  create: function(entity, id) {
    return new JsonIo(entity, id);  
  }
}
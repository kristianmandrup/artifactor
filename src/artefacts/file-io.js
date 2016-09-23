const fs = require('fs-promise');
const entities = require('./entities'); 
const Paths = require('./paths');

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
class FileIo {
  constructor(entity, id) {
    this.entity = entity || 'components';
    this.id = id;
    this.entities = entities;
    this.paths = new Paths(entity, id);
  }

  validate() {
    return this.entities.validate();
  }

  // return single .json file for that entity
  // See: https://www.npmjs.com/package/fs-promise
  async item() {
    let filePath = this.paths.itemPath;
    console.log('item path', filePath);
    return await fs.readFile(filePath, 'utf8');
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

  async rate(version, data) {
    let filePath = this.paths.versionPath(version);
    console.log('rate path', filePath);
    try {
      let item = await fs.readJson(filePath);
      // add rating to ratings of version item
      console.log('item before rating', item)
      item.ratings.push(data.rating);
      console.log('item after rating', item)
      await fs.outputJson(filePath + '.rated', item);
      return item;
    } catch (err) {
      return false;
    }     
  }

  async delete() {
    let filePath = this.paths.itemPath;
    console.log('delete path', filePath);
    try {
      await fs.remove(filePath);
      return true;
    } catch (err) {
      return false;
    }     
  }

  // return single .json file for that entity
  async version(version) {
    let filePath = this.paths.versionPath(version);
    console.log('version path', filePath);
    return await fs.readFile(filePath, 'utf8');
  }

  async list() {
    return await fs.readFile(this.paths.listPath, 'utf8');
  }
}

module.exports = {
  clazz: FileIo,
  create: function(entity, id) {
    return new FileIo(entity, id);
  }
}
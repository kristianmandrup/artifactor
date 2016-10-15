import fs from 'fs-promise';
import BaseIo from './base'; 

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
class FileIo extends BaseIo {
  constructor(entity, id) {
    super(entity, id);
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

  async addVersion(data) {
    let version = data.version; 
    let filePath = this.paths.versionPath(version);
    try {
      return await fs.outputJson(filePath, data);
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
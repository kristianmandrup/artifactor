const fs = require('fs-promise');
const entities = require('./entities'); 
const path = require('path');
const Paths = require('./paths');

class FileIo {
  constructor(entity, name) {
    this.entity = entity || 'components';
    this.name = name;
    this.entities = entities;
    this.paths = new Paths(entity, name);
  }

  validate() {
    return this.entities.validate();
  }

  // return single .json file for that entity
  // See: https://www.npmjs.com/package/fs-promise
  async item() {
    console.log('item', this.paths.itemPath);
    return await fs.readFile(this.paths.itemPath, 'utf8');
  }

  // return single .json file for that entity
  async version() {
    return await fs.readFile(this.paths.versionPath, 'utf8');
  }

  async list() {
    return await fs.readFile(this.paths.listPath, 'utf8');
  }
}

module.exports = {
  clazz: FileIo,
  create: function(entity, name) {
    return new FileIo(entity, name);
  }
}
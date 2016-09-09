const fs = require('fs-promise');
const entities = require('./entities'); 
const path = require('path');
const paths = require('./paths');

class FileIo {
  constructor(entity, name) {
    this.entity = entity || 'components';
    this.entities = entities;
    this.paths = new Paths(name);
  }

  validate() {
    return this.entities.validate();
  }

  // return single .json file for that entity
  async file(name) {
    return fs.readFile(this.paths.filePath(), 'utf8');
  }

  // return single .json file for that entity
  async version(name) {
    return fs.readFile(this.versionPath(name), 'utf8');
  }

  get listFile() {
    return path.join(this.entityDir, 'list.json');
  }

  get list() {
    return fs.readFile(this.listFile, 'utf8');
  }
}

module.exports = {
  clazz: FileIo,
  create: function(entity, name) {
    return new FileIo(entity, name);
  }
}
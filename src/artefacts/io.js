const fs = require('fs-promise');
const entities = require('./entities'); 
const path = require('path');

class Io {
  constructor(entity) {
    this.entity = entity || 'components';
    this.entities = entities;
  }

  validate() {
    return this.entities.validate();
  }

  get entityDir() {
    return path.join(__dirname, this.entity);
  }

  get paths() {
    return fs.readdir(dir);
  }

  // async
  createJsonItem(id, ctx) {
    console.log(`Create ${this.entity} for ${id} not yet supported...`);
  }

  // async 
  deleteJsonItem(id, ctx) {
    console.log(`Delete ${this.entity} for ${id} not yet supported...`);
  }

  // async 
  updateJsonItem(id, ctx) {
    this.createJsonItem(id, ctx);
  }

  async jsonItem(id) {
    return JSON.parse(this.file(id));
  }

  async jsonVersion(id) {
    return JSON.parse(this.version(id));
  }

  async jsonList(id) {
    return JSON.parse(this.list());
  }

  fileName(name) {
    // normalize file name to always have .json extension
    return !name.match(/\.json$/) ? `${name}.json` : name; 
  }

  folder(name) {
    return path.join(this.entityDir, name);
  }

  filePath(name) {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder(name), 'item.json');
  }

  versionPath(name) {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder(name), 'version.json');
  }

  // return single .json file for that entity
  async file(name) {
    return fs.readFile(this.filePath(name), 'utf8');
  }

  // return single .json file for that entity
  async version(name) {
    return fs.readFile(this.versionPath(name), 'utf8');
  }

  get listFile() {
    return path.join(this.entityDir, 'list.json');
  }

  rateVersion(id, versionId, data) {
    console.log(`Rate ${this.entity} for ${id} not yet supported...`);
  }

  get list() {
    return fs.readFile(this.listFile, 'utf8');
  }

  // return list of json entries, one for each file of entity type
  get files() {
    return Promise.all(
      this.paths.map(path => {        
        const fileContent = fs.readFile(this.filePath(path), 'utf8');
        return JSON.parse(fileContent);
      })    
    );
  }
}

module.exports = {
  Io: Io,
  create: function(entity) {
    return new Io(entity);
  }
}
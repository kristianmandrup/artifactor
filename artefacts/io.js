const fs = require('fs-promise');
const entities = require('./entities'); 

module.exports = class IO {
  construtor(entity) {
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
    return await fs.readdir(dir);
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
    return await JSON.parse(this.file(id));
  }

  async jsonList(id) {
    return await JSON.parse(this.list());
  }


  fileName(name) {
    // normalize file name to always have .json extension
    return !name.match(/\.json$/) ? `${name}.json` : name; 
  }

  filePath(name) {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.entityDir, name, 'item.json');
  }

  // return single .json file for that entity
  async file(name) {
    return await fs.readFile(this.filePath(name), 'utf8');
  }

  get listFile() {
    return path.join(this.entityDir, 'list.json');
  }

  get list() {
    return await fs.readFile(this.listFile, 'utf8');
  }

  // return list of json entries, one for each file of entity type
  get files() {
    return await Promise.all(
      this.paths.map(path => {        
        const fileContent = fs.readFile(this.filePath(path), 'utf8');
        return JSON.parse(fileContent);
      })    
    );
  }
}
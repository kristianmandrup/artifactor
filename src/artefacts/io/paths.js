const path = require('path');

module.exports = class Paths {
  constructor(entity, id) {
    this.entity = entity;
    this.id = id;
  }

  get entityDir() {
    return path.join(__dirname, '../../../responses', this.entity);
  }

  get folder() {
    return path.join(this.entityDir, this.id);
  }

  get listPath() {
    return path.join(this.entityDir, 'list.json');
  }

  get itemPath() {
    return path.join(this.folder, `item.json`);
  }

  versionPath(version = 'version') {
    return path.join(this.folder, `${version}.json`);
  }  
}
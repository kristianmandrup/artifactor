const path = require('path');

module.exports = class Paths {
  constructor(entity, name) {
    this.entity = entity;
    this.name = name;
  }

  get entityDir() {
    return path.join(__dirname, '../../responses', this.entity);
  }

  get folder() {
    return path.join(this.entityDir, this.name);
  }

  get itemPath() {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder, 'item.json');
  }

  get versionPath() {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder, 'version.json');
  }  
}
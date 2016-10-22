const path = require('path');

module.exports = class Paths {
  constructor(entity, id) {
    this.entity = entity;
    this.id = id;
  }

  get entityDir() {
    return path.join(__dirname, '../../../../responses', this.entity);
  }

  get folder() {
    return path.join(this.entityDir, this.id);
  }

  versionPath(version) {
    if (!version) {
      throw 'versionPath: Missing version';
    }
    return path.join(this.folder, `${version}.json`);
  }  
}
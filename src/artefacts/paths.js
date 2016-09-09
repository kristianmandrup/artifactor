module.exports = class Paths {
  constructor(name) {
    this.name = name;
  }

  get entityDir() {
    return path.join(__dirname, '../../responses', this.entity);
  }

  get fileName() {
    // normalize file name to always have .json extension
    return !this.name.match(/\.json$/) ? `${this.name}.json` : this.name; 
  }

  get folder() {
    return path.join(this.entityDir, this.name);
  }

  itemPath() {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder, 'item.json');
  }

  versionPath(name) {
    // return path.join(this.entityDir, this.fileName(name));
    return path.join(this.folder, 'version.json');
  }  
}
const fs = require('fs-promise');
const path = require('path');

class FileSaver {
  constructor(artefact) {
    this.artefact = artefact;
    this.type = artefact.type;
    this.name = artefact.name.toLowerCase();
  }

  get fileName() {
    return [this.artefact.version, 'json'].join('.');
  }

  get filePath() {
    return path.join(this.type, this.name);
  }

  get jsonFilePath() {        
    return path.join(this.filePath, this.fileName);
  }

  async save(artefact) {
    try {
      await fs.outputJson(this.jsonFilePath, this.artefact);
      return true;
    } catch (err) {
      return false; 
    }    
  }
}

module.exports = (artefact) => {
  return new FileSaver(artefact);
}

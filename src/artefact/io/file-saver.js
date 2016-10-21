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

  save(artefact) {
    await fs.outputJson(this.jsonFilePath, this.artefact); 
  }
}

module.exports = {
  FileSaver,
  createFileSaver: (artefact) => {
    return new FileSaver(artefact);
  }
}
module.exports = class DbSaver {
  constructor(artefact, adapter) {
    this.artefact = artefact;
    this.adapter = adapter;
    this.type = artefact.type;
    this.name = artefact.name.toLowerCase();
  }

  save() {
    adapter.createVersion(this.artefact);
  }
}

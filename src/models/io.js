module.exports = class ModelIo {
  constructor(model, adapter) {
    this.model = model;
    this.adapter = adapter;

    // alias
    this.delete = this.remove;
  }

  create() {
    adapter.create(this.model);
  }

  remove() {
    adapter.remove(this.model);
  }
}

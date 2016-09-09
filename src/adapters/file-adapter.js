import io from '../artefacts/json-io'

class Adapter {
  constructor(entity, name) {
    this.io = io.create(entity, name);
  }

  async item() {
    return await this.io.getItem();
  }

  async list() {
    return this.io.getList();
  }

  async version(versionId) {
    return this.io.getVersion(id);
  }

  // creates new and/or adds new version (upsert)
  async create(data) {
    return this.io.createItem(data);
  }

  // adds new version (upsert)
  async update(data) {
    return this.io.updateItem(data);
  }  

  async delete() {
    return this.io.deleteItem();
  }

  async rate(data) {
    return this.io.rateVersion(versionId, data);
  }
}

module.exports = {
  Adapter: Adapter,
  adapt: function(entity, name) {
    return new Adapter(entity, name);
  }
} 
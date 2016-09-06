import io from '../artefacts/io'

class Adapter {
  constructor(entity) {
    this.io = io.create(entity);
  }

  async item(id) {
    return io.jsonItem(id);
  }

  async list(id) {
    return io.jsonList();
  }

  async version(id, versionId) {
    return io.jsonVersion(id);
  }

  // creates new and/or adds new version (upsert)
  async create(id, data) {
    return io.createJsonItem(id, data);
  }

  // adds new version (upsert)
  async update(id, data) {
    return io.updateJsonItem(id, data);
  }  

  async delete(id) {
    return io.deleteJsonItem(id);
  }

  async rate(id, data) {
    return io.rateVersion(id, versionId, data);
  }
}

module.exports = {
  Adapter: Adapter,
  adapt: function(entity) {
    return new Adapter(entity)
  }
} 
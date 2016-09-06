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

  async create(id, data) {
    // return io.create(data);
  }
}

module.exports = {
  Adapter: Adapter,
  adapt: function(entity) {
    return new Adapter(entity)
  }
} 
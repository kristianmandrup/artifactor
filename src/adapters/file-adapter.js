import io from '../artefacts/io';

class FileAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {id}) {
    this.io = io.json.create(entity, id);
  }

  async item() {
    return await this.io.getItem();
  }

  async list() {
    // console.log('get file list');
    let list = await this.io.getList();
    // console.log('list', list);
    return list; // await this.io.getList();
  }

  async version({version}) {
    // console.log('get version', version);
    return await this.io.getVersion(version);
  }

  // creates new and/or adds new version (upsert)
  async create({data}) {
    console.log('create item', data);
    return await this.io.createItem(data);
  }

  // adds new version (upsert)
  async update({data}) {
    return this.io.updateItem(data);
  }  

  async delete() {
    return this.io.deleteItem();
  }

  async rate({version, data}) {
    return this.io.rateVersion(version, data);
  }
}

module.exports = {
  Adapter: FileAdapter,
  // id is optional, used to indicate specific REST resource
  adapt: function(entity, id) {
    return new FileAdapter(entity, id);
  }
} 
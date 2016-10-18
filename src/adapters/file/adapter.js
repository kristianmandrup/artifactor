import io from './';

class FileAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {id}) {
    this.io = io.create(entity, id);
  }

  async item() {
    return await this.io.json.getItem();
  }

  async list() {
    // console.log('get file list');
    let list = await this.io.json.getList();
    // console.log('list', list);
    return list; // await this.io.getList();
  }

  async version({version}) {
    // console.log('get version', version);
    return await this.io.json.getVersion(version);
  }

  // creates new and/or adds new version (upsert)
  async create({data}) {
    console.log('create item', data);
    return await this.io.json.createItem(data);
  }

  // adds new version (upsert)
  async update({data}) {
    return this.io.json.updateItem(data);
  }  

  async delete() {
    return this.io.file.deleteItem();
  }

  async rate({version, data}) {
    return this.io.json.rateVersion(version, data);
  }
}

module.exports = {
  Adapter: FileAdapter,
  // id is optional, used to indicate specific REST resource
  adapt: function(entity, id) {
    return new FileAdapter(entity, id);
  }
} 
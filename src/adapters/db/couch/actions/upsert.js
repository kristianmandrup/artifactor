const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  // TODO: use data instance var
  async execute() {
    return {
      upserted: await this.upserted()
    };
  }

  // uses: outputJson from fs-extra
  // Almost the same as writeJson, except that if the directory does not exist, it's created.
  async upserted() {
    try {
      await this.model.updateOrCreate(this.data).exec();
      return true;
    } catch (err) {
      return false;
    }     
  }  
}

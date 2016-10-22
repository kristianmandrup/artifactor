const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }
 
  async delete() {
    return {
      deleted: await this.deleted()
    };
  }

  async deleted() {
    return await this.model.delete({name: this.id}).exec();
  }
  
}

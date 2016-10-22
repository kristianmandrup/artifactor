const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  async execute() {
    return {
      deleted: await this.io.delete(this.id)
    };
  }
}

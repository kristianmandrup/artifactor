const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    return {
      deleted: await this.io.delete(this.id)
    };
  }
}

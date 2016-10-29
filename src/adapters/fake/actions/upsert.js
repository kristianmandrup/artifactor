const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  // TODO: use data instance var
  async execute() {
    return {
      upserted: true
    };
  }
}

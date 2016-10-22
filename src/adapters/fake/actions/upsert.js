const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  // TODO: use data instance var
  async execute() {
    return {
      upserted: true
    };
  }
}

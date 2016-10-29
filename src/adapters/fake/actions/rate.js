const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  // async
  async execute() {
    return {
      rated: true
    };
  }
}

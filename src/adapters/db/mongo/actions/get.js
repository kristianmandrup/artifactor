const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    return await this.model.get({name: this.id}).exec();    
  }
}


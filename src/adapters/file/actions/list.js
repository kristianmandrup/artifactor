const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  async execute() {
    let content = await this.io.list();
    console.log('json content', content);
    return JSON.parse(content);
  }
}
const BaseAction = require('../base');

module.exports = class Latest extends BaseAction {
  constructor(entity, id) {
    super(entity, id);
  }

  async execute() {
    return await this.faker.generate();    
  }
}

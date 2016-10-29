const BaseAction = require('../base');

module.exports = class Latest extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    return await this.faker.generate();    
  }
}

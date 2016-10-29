const BaseAction = require('./base');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    let number = randomInt(1, 10);
    return await this.faker.generate(number);    
  }
}
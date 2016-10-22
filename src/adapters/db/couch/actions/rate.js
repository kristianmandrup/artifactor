const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  async execute() {
    return {
      rated: await this.rated()
    };
  }  

  async rated() {
    return await this.model.get({name: this.id}).rate(this.rating).exec();
  }  
}

const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    return {
      rated: await this.rated()
    };
  }  

  async findArtefact() {
    return await this.model.get({name: this.id}).exec();
  }

  async rated() {
    let artefact = this.findArtefact();
    return artefact ? await artefact.rate(this.rating).exec() : false;
  }  
}

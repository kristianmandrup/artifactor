module.exports = class BaseAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(params, actions) {    
    this.params = params;
    this.entity = params.entity;
    this.actionName = params.action;
    this.createAction = actions.create[this.actionName];
    this.action = this.createAction(entity, {params});
  }

  async configure() {
    return this;
  }

  async execute() {
    return await this.action.execute();
  }
}

const actions = require('../actions');

class FileAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {params}) {
    this.entity = entity;
    this.params = params;
    this.actionName = params.action;
    this.createAction = actions.create[this.actionName];
    this.action = this.createAction(entity, {params});
  }

  async execute() {
    return this.action.execute();
  }
}

module.exports = {
  // params may contain id, data etc
  create: function(entity, {params}) {
    return new FileAdapter(entity, {params});
  }
} 
const { actions } = require('../');

class Action {
  constructor(params) {
    this.create = actions.create(params);

    for (let action of thisactions)
      this[action] = this.create[action]; 
  }

  get actions() {
    return ['upsert', 'delete', 'get', 'list', 'rate'];
  }
}

module.exports = function(params) {
  return new Action(params);
}
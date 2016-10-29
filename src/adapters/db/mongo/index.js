const models = require('./models');
const db = require('./db');
const { className } = require('../utils');

const BaseAdapter = require('../../base');
const actions = require('./actions');

class DbAdapter extends BaseAdapter {
  constructor(params) {
    super(params, actions)
  }

  async configure() {
    await super.configure();

    // Mongo specific
    this.clazzName = className(this.entity);
    this.model = models[this.clazzName];

    if (!this.model) {
      throw `No models defined for ${this.entity}`;
    } else {
      console.log('MODEL', this.entity, this.model);

      // set model on action
      this.action.model = this.model;
    }

    return this;    
  }

  // execute() : is inherited
}

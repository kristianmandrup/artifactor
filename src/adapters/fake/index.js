// Generates fake data, simulating a backend with tons of data
const BaseAdapter = require('../base');
const actions = require('./actions');

class FakeAdapter extends BaseAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {params}) {
    super(entity, {params}, actions)
  }

  async configure() {
    return await super.configure();
  }

  // execute : is inherited
}

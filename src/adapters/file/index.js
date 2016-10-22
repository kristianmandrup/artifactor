const BaseAdapter = require('../base');
const actions = require('./actions');

class FileAdapter extends BaseAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {params}) {
    super(entity, {params}, ations);
  }

  async configure() {
    return await super.configure();
  }

  // execute() : is inherited  
}
